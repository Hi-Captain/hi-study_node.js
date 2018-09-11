const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()
const port = 4000
const courses = require('./courses')

router.use('/courses', courses.routes())
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(port, () => {
  console.log("Server Open : " + port)
})
