import { Status } from "https://deno.land/std@0.153.0/http/http_status.ts";
import { Application, Context, Request, Response, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { proxy } from "https://deno.land/x/oak_http_proxy@2.1.0/mod.ts";
// docs https://deno.land/x/oak_http_proxy@2.1.0
import { Octokit } from "https://cdn.skypack.dev/octokit";


async function getConfig(key: string): Promise<string>{
  const envVal = Deno.env.get(key)
  
  if(!envVal){
    const config = (await import('../config.js')).default as Record<string, unknown>
    return config[key] as string 
  }
  console.log(`env: ${key}=${envVal}`)
  return envVal
}

const allowedOriginHosts = (await getConfig('allowed_origin_hosts')).split(',')
const gh_gist_token = await getConfig('gh_gist_token')
const key = await getConfig('key')
const dict_name = await getConfig('dict_name')
const editor_token = await getConfig('editor_token')

const app = new Application()
const router = new Router()
const octokit = new Octokit({ auth: gh_gist_token })

function isAuthorized(request: Request){
  const auth = request.headers.get('Authorization')
  if(auth){
    const [_, token] = auth.split('Bearer ')
    const normalizedToken = (token || '').trim()
    console.log('Authorization token', normalizedToken.substring(0, Math.min(normalizedToken.length, 5)));
    return normalizedToken === editor_token
  }
}

function applyCorsHeaders(response: Response, request: Request){
  const originUrl = new URL(request.headers.get('origin') as string)
  if(allowedOriginHosts.includes(originUrl.hostname)){
    const origin = originUrl.origin
    response.headers.set('Access-Control-Allow-Origin', origin)
  }
  response.headers.set('Access-Control-Allow-Methods', 'OPTIONS, PATCH, POST, GET')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
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

  const gist = await octokit.request(`GET /gists/${context.params.gist_id}`, {
    gist_id: context.params.gist_id
  })
  const gistText = gist.data.files['db.json'].content
  const gistJson = JSON.parse(gistText)
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
  await octokit.request(`PATCH /gists/${params.gist_id}`, {
    gist_id: params.gist_id,
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
app.use(router.allowedMethods())

export default app