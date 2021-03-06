const Koa = require("koa");
const mount = require('koa-mount');
const serve = require("koa-static");

const app = new Koa();

app.use(mount('/', serve(__dirname + '/public')));

app.use(mount('/public', serve(__dirname + '/public')));

window.startServer = () => {
  return new Promise(resolve => {
    app.listen(7899, '0.0.0.0', () => {
      resolve(7899)
    });
  })
}