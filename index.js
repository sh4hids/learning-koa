const koa = require('koa');
const koaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const app = new koa();
const router = new koaRouter();
app.use(bodyParser());

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

router.post('/user', async ctx => {
  let newUser = ctx.request.body;

  ctx.body = {
    success: true,
    message: `New user named ${newUser.name} has been created successfully.`,
  };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(8000);
