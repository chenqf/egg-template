'use strict';
const path = require('path');
const tool = require('../tool');

const dirPath = path.resolve(__dirname, '../../../app/service');

const flg = tool.rmdirSync(dirPath);

if (flg) {
  console.log('service 删除完成');
}

