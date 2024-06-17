const app = require("koa")();
const router = require("koa-router")();
const db = require("./db.json");

// Log requests
app.use(function* (next) {
  const start = new Date();
  yield next;
  const ms = new Date() - start;
  console.log("%s %s - %s", this.method, this.url, ms);
});

router.get('/api/farmers', function* (next) {
  yield next; // Add yield statement here
  this.body = db;
});

router.get('/api/farmers/:farmersId', function* (next) {
  yield next; // Add yield statement here
  const id = parseInt(this.params.farmersId);
  this.body = db.find((farmer) => farmer.id == id);
});

router.get("/api/", function* () {
  yield; // Add yield statement here
  this.body = "Farmers API ready to receive requests...";
});

router.get("/", function* () {
  yield; // Add yield statement here
  this.body = "Setup and ready to receive request...";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
console.log("Worker started");
