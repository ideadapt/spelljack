import { Status } from "https://deno.land/std@0.153.0/http/http_status.ts";
import { Application, Context, Request, Response, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { proxy } from "https://deno.land/x/oak_http_proxy@2.1.0/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";


function getConfig(key: string): string{
  let envVal = Deno.env.get(key)
  if(!envVal){
    envVal = config({ path: `${Deno.cwd()}/server/.env` })[key]
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
  headers: new Headers({'Authorization': gh_gist_token, "X-GitHub-Api-Version": "2022-11-28", 'accept': 'application/json'})
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

function applyCorsHeaders(response: Response, request: Request){
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
  response.status = Status.OK
}

router
.get("/proxy", proxy((context: Context) => {
  applyCorsHeaders(context.response, context.request)
  const target = context.request.url.searchParams.get('url') as string
  console.log('GET target url', target)
  return new URL(target)
}))

router
.options('/proxy', ({request, response}) => applyCorsHeaders(response, request))
.post("/proxy", proxy((context: Context) => {
  const target = context.request.url.searchParams.get('url') as string
  console.log('POST target url', target)
  return new URL(target)
}, {
  filterReq(request: Request, response: Response){
    if(request.method !== 'OPTIONS' && !isAuthorized(request)){
      console.log('Not authorized!')
      applyCorsHeaders(response, request)
      response.status = Status.Unauthorized
      return true
    }
    return false
  },
  proxyReqInitDecorator(proxyReqOpts, srcReq: Request) {
    const target = new URL(srcReq.url.searchParams.get('url') as string)

    if(target.hostname === 'api.textgears.com'){
          const json = JSON.parse(proxyReqOpts.body as string)
          json.key = key
          proxyReqOpts.body = JSON.stringify(json)
    }

    return proxyReqOpts;
  }
}))

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

  // TODO should be on client side?
  if(!("findings" in gistJson)){
      gistJson.findings = []
  }
  if(!("articles" in gistJson)){
      gistJson.articles = []
  }
  applyCorsHeaders(context.response, context.request)
  context.response.headers.set('Content-Type', 'application/json')
  context.response.body = gistJson
  context.response.status = Status.OK
})

router
.options('/gists/:gist_id', ({request, response}) => applyCorsHeaders(response, request))
.patch('/gists/:gist_id', async ({request, response, params}) => {
  console.log('PATCH gist')

  if(!isAuthorized(request)){
    console.log('Not authorized!')
    applyCorsHeaders(response, request)
    response.status = Status.Unauthorized
    return
  }
  
  const state = await request.body({ type: 'json'}).value
  await octokit(`/gists/${params.gist_id}`, 'PATCH', {
    description: 'spelljack-db-' + dict_name,
    files: {
        'db.json': { content: JSON.stringify(state) }
    }
  })

  applyCorsHeaders(response, request)
  response.headers.set('Content-Type', 'application/json')
  response.status = Status.OK
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