'use strict';
module.exports = () => {
  return async function cros(ctx, next) {
    ctx.set('Access-Control-Allow-Credentials', 'true');
    ctx.set('Access-Control-Allow-Origin', ctx.headers.origin);
    ctx.set('Access-Control-Allow-Headers', 'X-Requested-With');
    ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    ctx.set('X-Powered-By', ' 3.2.1');
    await next();
  };
};
