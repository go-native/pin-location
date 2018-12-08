const Router = require('koa-router')
const router = new Router()
const dataSource = require('./../data-source')

router.get('/addresses', async ctx => {
  ctx.body = dataSource.getAll()
})

router.post('/addresses', async ctx => {
  const address = JSON.parse(ctx.request.body)
  address.id = (new Date()).valueOf().toString()
  ctx.body = dataSource.insert(address)
})

router.put('/addresses', async ctx => {
  const address = JSON.parse(ctx.request.body)
  ctx.body = dataSource.update(address)
})

router.del('/addresses/:id', async ctx => {
  ctx.body = dataSource.delete(ctx.params.id)
})

module.exports = router;