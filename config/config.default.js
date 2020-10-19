/* eslint valid-jsdoc: "off" */

'use strict';

const databaseSetting = require('../database/config.json');
const { dialect, host, port, database, username, password } = databaseSetting;


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1596000284510_8633';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.middleware = [
    'gzip', 'cros', 'wrap',
  ];

  // change to your own sequelize configurations
  config.sequelize = {
    dialect,
    host,
    port,
    database,
    username,
    password,
    pool: {
      max: 50,
      min: 20,
      acquire: 30000, // 尝试抛出错误之前尝试获取连接的最长时间（以毫秒为单位）
      idle: 10000, // 连接释放之前可以空闲的最长时间（以毫秒为单位）
    },
    logging: true, // 线上停止log输出
    define: {
      // 是否自动进行下划线转换（这里是因为DB默认的命名规则是下划线方式，而我们使用的大多数是驼峰方式）
      underscored: true,
      // 不使用复数表名
      freezeTableName: true,
    },
    timezone: '+08:00',
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
  };
  config.security = {
    csrf: false,
  };

  config.cluster = {
    listen: {
      port: 7001,
      hostname: '0.0.0.0',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
