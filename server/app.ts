import { Status } from "https://deno.land/std@0.153.0/http/http_status.ts";
import { Application, Context, Request, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { proxy } from "https://deno.land/x/oak_http_proxy@2.1.0/mod.ts";
// docs https://deno.land/x/oak_http_proxy@2.1.0
import { Octokit } from "https://cdn.skypack.dev/octokit?dts";

async function getConfig(key: string){
  const envVal = Deno.env.get(key)
  if(!envVal){
    const config = await import('../config.js') as Record<string, unknown>
    return config[key] 
  }
  return envVal
}

const app = new Application()
const router = new Router()
const octokit = new Octokit({ auth: getConfig('gh_gist_token') })

function setCorsHeaders(responseHeaders: Headers){
  responseHeaders.set('Access-Control-Allow-Origin', '*')
  responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type')
}


router.options("/proxy", (context) => {
  setCorsHeaders(context.response.headers)
  context.response.status = Status.OK
})

router.post("/proxy", proxy((context: Context) => {
  const target = context.request.url.searchParams.get('url') as string
  console.log('target url', target)
  return new URL(target)
}, {
  proxyReqInitDecorator(proxyReqOpts, srcReq: Request) {
    console.log(srcReq);
    console.log(proxyReqOpts.body)

    const target = new URL(srcReq.url.searchParams.get('url') as string)

    if(target.hostname === 'api.textgears.com'){
          const json = JSON.parse(proxyReqOpts.body as string)
          json.key = getConfig('key')
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
  setCorsHeaders(context.response.headers)
  context.response.headers.set('Content-Type', 'application/json')
  context.response.body = gistJson
  context.response.status = Status.OK
})

router.patch('/gists/:gist_id', async (context) => {
  console.log('PATCH gist')
  
  const state = context.request.body({ type: 'json'})
  await octokit.request(`PATCH /gists/${context.params.gist_id}`, {
    gist_id: context.params.gist_id,
    description: 'spelljack-db-' + getConfig('dict_name'),
    files: {
        'db.json': { content: JSON.stringify(state) }
    }
  })

  setCorsHeaders(context.response.headers)
  context.response.headers.set('Content-Type', 'application/json')
  context.response.status = Status.OK
})

app.use(router.routes())
app.use(router.allowedMethods())

export default app