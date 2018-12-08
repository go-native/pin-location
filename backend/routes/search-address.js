const Router = require('koa-router')
const router = new Router()
const GeocodeService = require('./../geocode-service')
const geocodeApi = new GeocodeService(require('./../google-api'))

router.get('/search-address/:query', async ctx => {
  ctx.body = await geocodeApi.searchAddress(ctx.params.query)
})

module.exports = router
