'use strict';
const tables = require('../tables.js');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    for (let i = 0; i < tables.length; i++) {
      const field = {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 主键,自增长
        ...tables[i].field,
        created_at: DATE,
        updated_at: DATE,
      };
      await queryInterface.createTable(tables[i].name, field);
    }
  },

  down: async (queryInterface, Sequelize) => {
    for (let i = 0; i < tables.length; i++) {
      await queryInterface.dropTable(tables[i].name);
    }
  },
};
