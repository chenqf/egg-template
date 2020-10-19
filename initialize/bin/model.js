'use strict';
const path = require('path');
const Sequelize = require('sequelize');
const tool = require('./tool');
const tables = require('../../database/tables');
const nameList = tables.map(i => tool.camelCase(i.name));
const rootPath = path.resolve(__dirname, '../../');
const modelPath = path.resolve(rootPath, 'app/model');
const templatePath = path.resolve(rootPath, 'initialize/template/model.js');
const templateStr = tool.readFile(templatePath);
const { INTEGER, BIGINT, DATE, STRING, TEXT, DECIMAL, FLOAT, DOUBLE } = Sequelize;

tool.initDir(modelPath);

tables.forEach(item => {
  let { name, nameForChinese, field } = item;
  name = tool.camelCase(name);
  const filePath = path.resolve(modelPath, `${name}.js`);
  // TODO 是否存在文件,提示是否覆盖
  const content = templateStr
    .replace(/__table_name__/gm, name)
    .replace(/__up_table_name__/g, tool.firstChatUpperCase(name))
    .replace(/__table_name_zh__/g, nameForChinese);
  const keys = Object.keys(field);
  const list = [];
  keys.forEach(key => {
    const type = field[key];
    if (type === STRING) {
      list.push(`${key}: STRING,`);
    }
    if (type === TEXT) {
      list.push(`${key}: TEXT,`);
    }
    if (type === INTEGER) {
      list.push(`${key}: INTEGER,`);
    }
    if (type === BIGINT) {
      list.push(`${key}: STRING,`);
    }
    if (type === FLOAT) {
      list.push(`${key}: STRING,`);
    }
    if (type === DOUBLE) {
      list.push(`${key}: STRING,`);
    }
    if (type === DECIMAL) {
      list.push(`${key}: TEXT,`);
    }
    if (type === DATE) {
      list.push(`${key}: DATE,`);
    }
  });
  const blank = content.match(/^(.*)created_at/m)[1];
  const result = content.replace(/.*--model\s+replace--.*/gm, list.length ? blank + list.join('\n' + blank) : '');
  tool.writeFile(filePath, result);
});

console.log('以下 model 生成完毕:');
console.log(JSON.stringify(nameList.map(i => i + '.js')));
