// 引入Koa
let Koa = require('koa')
// 引入KoaRouter
let KoaRouter = require('koa-router')
// 实例化Koa
let koa = new Koa()
// 实例化KoaRouter
let koaRouter = new KoaRouter()
// 引入datas数据
let datas = require('./datas/data.json')

// 浏览器和React Native
var Fly = require('flyio/src/node')
var fly = new Fly

// 定义返回数据的接口
koaRouter.get('/', (ctx, next) => {
  let req = ctx.query.req
  console.log(req)
  ctx.body = '测试'
})
koaRouter.get('/login', (ctx, next) => {
  let req = ctx.query.req
  console.log(req)
  ctx.body = '登录成功了'
})
koaRouter.get('/shops', (ctx, next) => {
  let req = ctx.query.req
  console.log(req)
  ctx.body = [
    {
      name: '奶茶',
      price: '20元'
    },
    {
      name: '米饭',
      price: '30元'
    }
  ]
})
koaRouter.get('/search', (ctx, next) => {
  let req = ctx.query.req
  console.log(req)
  ctx.body = datas
})

koaRouter.get('/getopenId', async (ctx, next) => {
  const code = ctx.query.code
  const appid = 'wx8dc92766a09575de'
  const secret = '8cc9978fb559e68c8b37ae4b71ee2788'
  const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
  let body = await fly.get(url)
  console.log(typeof body)
  body = JSON.parse(body.data)
  ctx.body = body.openid
  // 发送请求
  // fly.get(url)
  //   .then(function (response) {
  //     body=response
  //   })
  //   .catch(function (error) {
  //     body=error
  //   })
})

koa
  .use(koaRouter.routes())
  .use(koaRouter.allowedMethods())
koa.listen('4000', () => {
  console.log('服务器启动了')
  console.log('服务器的地址:http://localhost:4000')
})
