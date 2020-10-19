'use strict';
const { Controller } = require('egg');
class BaseController extends Controller {
  get user() {
    return this.ctx.session.user;
  }
  get params() {
    return { ...this.ctx.request.query, ...this.ctx.request.body };
  }
}
module.exports = BaseController;
