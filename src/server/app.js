import http from 'http'
import Koa from 'koa'
import path from 'path'
import views from 'koa-views'
import convert from 'koa-convert'
import json from 'koa-json'
import Bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import koaStatic from 'koa-static-plus'
import KoaOnError from 'koa-onerror'
import config from './config'

const app = new Koa();
const bodyParser = Bodyparser();

app.use(convert(bodyParser));
app.use(convert(json()));
app.use(convert(logger()));

app.use(convert(koaStatic(path.join(__dirname, './public')), {
    pathPrefix: ''
}));

app.use(views(path.join(__dirname, './views'), {
    map: {
        html: 'mustache'
    },
    extension: 'mustache'
}));

KoaOnError(app, {
    template: path.join(__dirname, './views', '500.mustache')
});

app.use(async (ctx, next) => {
    "use strict";
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(async (ctx, next) => {
    "use strict";
    await require('./routers').routes()(ctx, next)
});

app.use(async (ctx) => {
    "use strict";
    ctx.status = 404
    await ctx.render('404');
});

app.on('error', async (err, ctx) => {
    "use strict";
    console.log('error occured: ', err);
});

const port = parseInt(config.port || '3030');
const server = http.createServer(app.callback());

server.listen(port);
server.on('error', (error) => {
    "use strict";
    if (error.syscall !== 'listen') {
        throw error
    }

    switch (error.code) {
        case 'EACCES':
            console.error(port + 'required elevated privilege');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(port + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error
    }
});

server.on('listening', () => {
    "use strict";
    console.log('Listening on port: %d', port);
});

export default app