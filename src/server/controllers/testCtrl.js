export default async (ctx, next) => {
    "use strict";
   	const title = 'this is a test'

   	await ctx.render('test', {
   		title: title,
   		test: 'hello test'
   	})
}