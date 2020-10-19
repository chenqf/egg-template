'use strict';
const Service = require('egg').Service;

class __up_table_name__Service extends Service {
  // 增
  async create(params) {
    return await this.ctx.model.__up_table_name__.create(params);
  }
  // 删
  async delete(id) {
    const __table_name__ = await this.findById(id);
    await __table_name__.destroy();
    return __table_name__.id;
  }
  // 改
  async update(params) {
    const { id } = params;
    const __table_name__ = await this.findById(id);
    return __table_name__.update(params);
  }
  // 根据Id查
  async findById(id) {
    const __table_name__ = await this.ctx.model.__up_table_name__.findByPk(id);
    if (!__table_name__) {
      throw new Error('__table_name_zh__不存在');
    }
    return __table_name__;
  }
  // 查所有(满足search-params条件的)
  async queryAll(params = {}) {
    const __query_field_params__ = params;
    const { createTime, endTime } = params;
    return this.ctx.model.__up_table_name__.findAll({
      where: {
        ...this.ctx.helper.whereEq(__query_field_params__),
        ...this.ctx.helper.whereCreatedAt({ createTime, endTime }),
      },
      ...this.ctx.helper.orderByDesc(), // 降序排列(新添加的在前面),升序请使用 helper.orderByAsc
    });
  }
  // 分页查(满足search-params条件的)
  async queryByPage(params = {}) {
    const { pageNum = 1, pageSize = 10 } = params;
    const __query_field_params__ = params;
    const { createTime, endTime } = params;
    return this.ctx.model.__up_table_name__.findAndCountAll({
      where: {
        ...this.ctx.helper.whereEq(__query_field_params__),
        ...this.ctx.helper.whereCreatedAt({ createTime, endTime }),
      },
      ...this.ctx.helper.limit({ pageNum, pageSize }),
      ...this.ctx.helper.orderByDesc(), // 降序排列(新添加的在前面),升序请使用 helper.orderByAsc
    });
  }

}


module.exports = __up_table_name__Service;
