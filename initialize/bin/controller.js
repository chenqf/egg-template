'use strict';
const path = require('path');
const tool = require('./tool');
const tables = require('../../database/tables');
const nameList = tables.map(i => tool.camelCase(i.name));
const rootPath = path.resolve(__dirname, '../../');
const controllerPath = path.resolve(rootPath, 'app/controller');
const templatePath = path.resolve(rootPath, 'initialize/template/controller.js');
const templateStr = tool.readFile(templatePath);
tool.initDir(controllerPath);

tables.forEach(item => {
  let { name, nameForChinese, field } = item;
  name = tool.camelCase(name);
  const filePath = path.resolve(controllerPath, `${name}.js`);
  // TODO 是否存在文件,提示是否覆盖
  const keys = Object.keys(field);
  const createParamStr = `{ ${keys.join(', ')} }`; // __create_field_params__
  const updateParamStr = `{ id, ${keys.join(', ')} }`; // __query_field_params__
  const queryParamStr = `{ id, ${keys.join(', ')}, startTime, endTime }`; // __query_list_params__
  const content = templateStr
    .replace(/__table_name__/gm, name)
    .replace(/__up_table_name__/g, tool.firstChatUpperCase(name))
    .replace(/__table_name_zh__/g, nameForChinese)
    .replace(/__create_field_params__/g, createParamStr)
    .replace(/__query_field_params__/g, updateParamStr)
    .replace(/__query_list_params__/g, queryParamStr);

  tool.writeFile(filePath, content);
});

console.log('以下 controller 生成完毕:');
console.log(JSON.stringify(nameList.map(i => i + '.js')));

