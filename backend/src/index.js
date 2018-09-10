const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
const port = 4000

let tempData = require('./api/1.0/courses.json')

router.get('/', (ctx, next) => {
  ctx.body = tempData.courses;
})

router.post('/', (ctx, next) => {  
  console.log(ctx.request)
  ctx.body = "post";
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(port, () => {
  console.log("Server Open : " + port)
})
