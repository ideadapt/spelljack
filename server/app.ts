import { Status } from "https://deno.land/std@0.153.0/http/http_status.ts";
import { Application, Context, Request, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { proxy } from "https://deno.land/x/oak_http_proxy@2.1.0/mod.ts";
// docs https://deno.land/x/oak_http_proxy@2.1.0
import { Octokit } from "https://cdn.skypack.dev/octokit?dts";


async function getConfig(key: string){
  const envVal = Deno.env.get(key)
  
  if(!envVal){
    const config = (await import('../config.js')).default as Record<string, unknown>
    return config[key] 
  }
  console.log(`env: ${key}=${envVal}`)
  return envVal
}

const allowedOriginHosts = (await getConfig('allowed_origin_hosts') as string).split(',')
const gh_gist_token = await getConfig('gh_gist_token')
const key = await getConfig('key')
const dict_name = await getConfig('dict_name')

const app = new Application()
const router = new Router()
const octokit = new Octokit({ auth: gh_gist_token })

function allowAll(context: Context){
  const originUrl = new URL(context.request.headers.get('origin') as string)
  if(allowedOriginHosts.includes(originUrl.hostname)){
    const origin = originUrl.origin
    context.response.headers.set('Access-Control-Allow-Origin', origin)
  }
  context.response.headers.set('Access-Control-Allow-Methods', 'OPTIONS, PATCH, POST, GET')
  context.response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  context.response.status = Status.OK
}

router
.get("/proxy", proxy((context: Context) => {
  allowAll(context)
  const target = context.request.url.searchParams.get('url') as string
  console.log('target url', target)
  return new URL(target)
}))

router
.options('/proxy', allowAll)
.post("/proxy", proxy((context: Context) => {
  const target = context.request.url.searchParams.get('url') as string
  console.log('target url', target)
  return new URL(target)
}, {
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
  allowAll(context)
  context.response.headers.set('Content-Type', 'application/json')
  context.response.body = gistJson
  context.response.status = Status.OK
})

router
.options('/gists/:gist_id', allowAll)
.patch('/gists/:gist_id', async (context) => {
  console.log('PATCH gist')
  
  const state = await context.request.body({ type: 'json'}).value
  await octokit.request(`PATCH /gists/${context.params.gist_id}`, {
    gist_id: context.params.gist_id,
    description: 'spelljack-db-' + dict_name,
    files: {
        'db.json': { content: JSON.stringify(state) }
    }
  })

  allowAll(context)
  context.response.headers.set('Content-Type', 'application/json')
  context.response.status = Status.OK
  context.response.body = JSON.stringify("{}")
})

app.use(router.routes())
app.use(router.allowedMethods())

export default app