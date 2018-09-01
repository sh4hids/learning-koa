const koa = require('koa');
const koaRouter = require('koa-router');
const app = new koa();
const router = new koaRouter();

router.get('/', async ctx => {
  ctx.body = {
    success: true,
    message: 'Welcome to koa world!',
  };
});

router.get('/user/:name', async ctx => {
  let name = ctx.params.name;

  ctx.body = {
    success: true,
    message: `Hello ${name}! Welcome to KoaJS!`,
  };
});

router.get('/search', async ctx => {
  let query = ctx.request.query.name;

  ctx.body = {
    success: true,
    result: [
      {
        id: 1,
        name: query,
        age: 25,
      },
    ],
  };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(8000);
