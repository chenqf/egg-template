'use strict';
const Sequelize = require('sequelize');
const { INTEGER, BIGINT, DATE, STRING, TEXT, DECIMAL, FLOAT, DOUBLE } = Sequelize;

module.exports = [
  {
    name: 'user',
    nameForChinese: '用户',
    field: {
      name: STRING,
      age: INTEGER,
      password: STRING,
      random: STRING,
    },
  },
  {
    name: 'payment',
    nameForChinese: '付款',
    field: {
      name: STRING(30),
      age: INTEGER,
      password: STRING,
      random: STRING,
    },
  },
];

