import * as http from "@std/http";
import { Application, Context, Request, Response, Router }  from "@oak/oak";
import { loadSync } from "@std/dotenv";


function getConfig(key: string): string {
  let envVal = Deno.env.get(key)
  if(!envVal){
    envVal = loadSync({ envPath: `${Deno.cwd()}/server/.env` })[key] as string
  }
  console.log(`env: ${key}=${envVal}`)
  return envVal
}

const allowedOriginHosts = getConfig('allowed_origin_hosts').split(',')
const gh_gist_token = getConfig('gh_gist_token')
const key = getConfig('key')
const dict_name = getConfig('dict_name')
const editor_password = getConfig('editor_password')

const app = new Application()
const router = new Router()
const ghApiOpts =   {
  headers: new Headers({'Authorization': 'Bearer ' + gh_gist_token, "X-GitHub-Api-Version": "2022-11-28", 'accept': 'application/json'})
}
const octokit = (path: string, method = 'GET', body: object | null = null) => fetch('https://api.github.com'+path, { method, ...ghApiOpts, body: body ? JSON.stringify(body) : null})
const rawOctokit = (path: string) => fetch('https://gist.githubusercontent.com'+path, ghApiOpts)

function isAuthorized(request: Request){
  const auth = request.headers.get('Authorization')
  if(auth){
    const [_, token] = auth.split('Bearer ')
    const normalizedToken = (token || '').trim()
    console.log('Authorization token', normalizedToken.substring(0, Math.min(normalizedToken.length, 5)));
    return normalizedToken === editor_password
  }
}

function applyCorsHeaders(response: Response | globalThis.Response, request: Request){
  const origin = request.headers.get('origin') as string  
  if(origin){
    const originUrl = new URL(origin)
    if(allowedOriginHosts.includes(originUrl.hostname)){
      const origin = originUrl.origin
      response.headers.set('Access-Control-Allow-Origin', origin)
    }
    response.headers.set('Access-Control-Allow-Methods', 'OPTIONS, PATCH, POST, GET')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  }
}

router
.get("/proxy", async (context: Context) => {
  const target = new URL(context.request.url.searchParams.get('url') || 'url query parameter missing')
  console.log('GET target url', target)
  const originResponse = await fetch(target, { method: 'GET' });
  applyCorsHeaders(context.response, context.request)
  context.response.body = await originResponse.text()
})

router
.options('/proxy', ({request, response}) => {
  applyCorsHeaders(response, request)
  response.status = http.STATUS_CODE.OK
})
.post("/proxy", async (context: Context) => {
  const request = context.request
  const response = context.response

  if(request.method !== 'OPTIONS' && !isAuthorized(request)){
    console.log('Not authorized!')
    applyCorsHeaders(response, request)
    response.status = http.STATUS_CODE.Unauthorized
    return response
  }

  const target = new URL(request.url.searchParams.get('url') || 'url query parameter missing')

  let patchedBody = await request.body.text()
  if(target.hostname === 'api.textgears.com'){
    const json = await request.body.json()
    json.key = key
    patchedBody = JSON.stringify(json)
  }

  console.log('POST target url', target)
  const originResponse = await fetch(target, { method: 'POST', body: patchedBody });
  applyCorsHeaders(response, request)
  response.body = await originResponse.text()
})

router.get('/gists/:gist_id', async (context) => {
  console.log('GET gist')

  const gist = await (await octokit(`/gists/${context.params.gist_id}`)).json();
  const dbFile = gist.files['db.json'];
  let gistJson = { articles: [], findings: []};
  // if db.json content is >1MB, github will truncate
  // and only serve full content via raw_url.
  if(dbFile.truncated === true){
    const rawUrl = new URL(dbFile.raw_url);
    const rawGist = await (await rawOctokit(`${rawUrl.pathname}`)).json();
    gistJson = rawGist;
  }else{
    gistJson = JSON.parse(dbFile.content);
  }

  if(!("findings" in gistJson)){
    // @ts-ignore init property
    gistJson.findings = []
  }
  if(!("articles" in gistJson)){
    // @ts-ignore init property
    gistJson.articles = []
  }
  applyCorsHeaders(context.response, context.request)
  context.response.headers.set('Content-Type', 'application/json')
  context.response.body = gistJson
  context.response.status = http.STATUS_CODE.OK
})

router
.options('/gists/:gist_id', ({request, response}) => {
  applyCorsHeaders(response, request)
  response.status = http.STATUS_CODE.OK
})
.patch('/gists/:gist_id', async ({request, response, params}) => {
  console.log('PATCH gist')

  if(!isAuthorized(request)){
    console.log('Not authorized!')
    applyCorsHeaders(response, request)
    response.status = http.STATUS_CODE.Unauthorized
    return
  }
  
  const state = await request.body.json()
  await octokit(`/gists/${params.gist_id}`, 'PATCH', {
    description: 'spelljack-db-' + dict_name,
    files: {
        'db.json': { content: JSON.stringify(state) }
    }
  })

  applyCorsHeaders(response, request)
  response.headers.set('Content-Type', 'application/json')
  response.status = http.STATUS_CODE.OK
  response.body = JSON.stringify("{}")
})


app.use(router.routes())
app.use(async (context, next)=> {
  try{
    await context.send({
      root: `${Deno.cwd()}/dist`,
      index: 'index.html'
    })
  }catch(_){
    await next()
  }
})
app.use(router.allowedMethods())

export default app