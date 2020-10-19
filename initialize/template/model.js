'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  // __table_name_zh__表
  const __up_table_name__ = app.model.define('__table_name__', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    /* --model replace--*/
    created_at: DATE,
    updated_at: DATE,
  });

  return __up_table_name__;
};
