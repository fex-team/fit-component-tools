export default async (ctx, next) => {
    "use strict";
    const title = 'Hello World';

    await ctx.render('index', {
        title
    });
}