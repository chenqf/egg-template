'use strict';
// const { NUMBER, USER_STATE } = require('../core/enum');
// const { PermissionError } = require('../core/custom_error');
module.exports = () => {
//   return async function log(ctx, next) {
//     if (ctx.request.url.indexOf('private') !== NUMBER.ONE) {
//       await next();
//       return;
//     }
//     if (ctx.request.url === '/private/user/login') {
//       await next();
//       return;
//     }

  //     const token = ctx.cookies.get('user_token', {
  //       // signed: true,
  //       // encrypt: true,
  //     });

  //     if (!token) {
  //       throw new PermissionError();
  //     }
  //     const userId = await ctx.app.cache.get(token);
  //     if (!userId) {
  //       throw new PermissionError();
  //     }
  //     const user = await ctx.model.User.findOne({
  //       include: {
  //         model: ctx.model.Role,
  //         as: 'roleList',
  //       },
  //       where: {
  //         id: userId,
  //       },
  //     });
  //     if (!user) {
  //       throw new PermissionError();
  //     }
  //     ctx.user = user;
  //     ctx.userId = user.id;
  //     ctx.counterId = user.counterId;
  //     ctx.storeId = user.storeId;
  //     ctx.roleList = user.roleList.map(i => i.name);
  //     await next();

//   };
};

