import Koa from 'koa'

let app = new Koa();

app.use(async (ctx) => {
    "use strict";
    ctx.body = 'Hello World';
});

app.listen(3030, () => {
    "use strict";
    console.log('server started at localhost:3030');
});
