'use strict';
const path = require('path');
const tool = require('../tool');

const dirPath = path.resolve(__dirname, '../../../app/controller');

const flg = tool.rmdirSync(dirPath);

if (flg) {
  console.log('controller 删除完成');
}

