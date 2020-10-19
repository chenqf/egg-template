'use strict';

const Controller = require('../core/base_controller');

class __up_table_name__Controller extends Controller {
  /**
   * 创建__table_name_zh__
   * 参数: 除 id,createAt,updateAt 外的所有字段
   */
  async create() {
    const __create_field_params__ = this.params;
    return await this.service.__table_name__.create(__create_field_params__);
  }
  /**
   * 删除__table_name_zh__
   * 参数: id
   * 根据 id 删除记录
   */
  async delete() {
    const { id } = this.params;
    if (!id) {
      throw new Error('id不可为空');
    }
    return await this.service.__table_name__.delete(id);
  }
  /**
   * 更新__table_name_zh__信息
   * 必传参数: id
   * 不接收的参数: createAt , updateAt
   * 其他字段作为更新
   */
  async update() {
    const __query_field_params__ = this.params;
    if (!this.params.id) {
      throw new Error('id不可为空');
    }
    return await this.service.__table_name__.update(__query_field_params__);
  }
  /**
   * 根据Id查询单条记录
   * 毕传参数: id
   */
  async findById() {
    const { id } = this.params;
    if (!id) {
      throw new Error('id不可为空');
    }
    return await this.service.__table_name__.findById(id);
  }
  /**
   * 根据查询条件,查询所有的__table_name_zh__
   * 时间区间参数: startTime:创建开始时间,endTime:创建结束时间
   * 不接收的参数: createAt , updateAt
   * 其他参数: __table_name_zh__表中其他字段,在查询中作全等匹配查询
   */
  async queryAll() {
    const __query_list_params__ = this.params;
    return await this.service.__table_name__.queryAll(__query_list_params__);
  }
  /**
   * 根据查询条件,分页查询所有的__table_name_zh__
   * 分页查询参数: pageNum:第几页,pageSize:每页多少条记录
   * 时间区间参数: startTime:创建开始时间,endTime:创建结束时间
   * 不接收的参数: createAt , updateAt
   * 其他参数: __table_name_zh__表中其他字段,在查询中作全等匹配查询
   */
  async queryByPage() {
    const { pageNum = 1, pageSize = 10 } = this.params;
    const __query_list_params__ = this.params;
    return await this.service.__table_name__.queryByPage({ pageNum, pageSize, ...__query_list_params__ });
  }

}

module.exports = __up_table_name__Controller;
