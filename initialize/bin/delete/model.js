'use strict';
const path = require('path');
const tool = require('../tool');

const dirPath = path.resolve(__dirname, '../../../app/model');

const flg = tool.rmdirSync(dirPath);

if (flg) {
  console.log('model 删除完成');
}

