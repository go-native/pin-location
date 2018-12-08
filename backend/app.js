const Koa = require('koa')
const koaBody = require('koa-body')
const cors = require('kcors')
const app = new Koa()

const addressRouter = require('./routes/address');
const searchRouter = require('./routes/search-address');

app
  .use(koaBody())
  .use(addressRouter.routes())
  .use(addressRouter.allowedMethods())
  .use(searchRouter.routes())
  .use(searchRouter.allowedMethods())
  .use(cors())

const PORT = process.env.PORT || 8085
app.listen(PORT, '0.0.0.0');
console.info(`listening on port ${PORT}`);

