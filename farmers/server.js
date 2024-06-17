const Koa = require('koa');
const Router = require('koa-router');
const db = require('./db.json');

const app = new Koa();
const router = new Router();

// // Log requests
// app.use(async (ctx, next) => {
//   const start = new Date();
//   await next();
//   const ms = new Date() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });

router.get('/api/farmers', async (ctx, next) => {
  await next();
  ctx.body = db;
});

router.get('/api/farmers/:farmersId', async (ctx, next) => {
  await next();
  const id = parseInt(ctx.params.farmersId);
  ctx.body = db.find((farmer) => farmer.id === id);
});

router.get('/api/', async (ctx) => {
  ctx.body = 'Farmers API ready to receive requests....';
});

router.get('/', async (ctx) => {
  ctx.body = 'Setup and ready to receive request....';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
console.log('Worker started');
