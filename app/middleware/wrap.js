/* eslint-disable no-magic-numbers */
'use strict';
module.exports = () => {
  return async function log(ctx, next) {
    const cookie = ctx.req.headers.cookie;
    try {
      const data = await next();
      ctx.body = {
        success: true,
        code: 0,
        data,
      };
    } catch (error) {
      ctx.body = {
        success: false,
        code: -1,
        message: (typeof error === 'string' ? error : error.message) || error,
        timestamp: Date.now(),
      };
    }

  };
};
