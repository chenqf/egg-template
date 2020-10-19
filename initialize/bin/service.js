'use strict';
const path = require('path');
const tool = require('./tool');
const tables = require('../../database/tables');
const nameList = tables.map(i => tool.camelCase(i.name));
const rootPath = path.resolve(__dirname, '../../');
const servicePath = path.resolve(rootPath, 'app/service');
const templatePath = path.resolve(rootPath, 'initialize/template/service.js');
const templateStr = tool.readFile(templatePath);

tool.initDir(servicePath);

tables.forEach(item => {
  let { name, nameForChinese, field } = item;
  name = tool.camelCase(name);
  const filePath = path.resolve(servicePath, `${name}.js`);
  // TODO 是否存在文件,提示是否覆盖
  const keys = Object.keys(field);
  const paramsStr = `{ id, ${keys.join(', ')} }`;
  const content = templateStr
    .replace(/__table_name__/gm, name)
    .replace(/__up_table_name__/g, tool.firstChatUpperCase(name))
    .replace(/__table_name_zh__/g, nameForChinese)
    .replace(/__query_field_params__/g, paramsStr);

  tool.writeFile(filePath, content);
});
console.log('以下 service 生成完毕:');
console.log(JSON.stringify(nameList.map(i => i + '.js')));
