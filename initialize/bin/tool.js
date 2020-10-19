'use strict';
const fs = require('fs');
const path = require('path');
const { createCipher } = require('crypto');

// 删除文件 fs.unlink(path, callback)
// 删除目录 fs.rmdir(path, callback)
// 创建目录 fs.mkdir(path[, options], callback)
// 读取文件 fs.readFileSync('input.txt');
// 获取文件信息 fs.stat(path, callback) state.isFile() state.isDirectory();
// 写入文件 fs.writeFile(file, data[, options], callback)


function deleteFolderRecursive(url) {
  let files = [];
  /**
       * 判断给定的路径是否存在
       */
  if (fs.existsSync(url)) {
    /**
           * 返回文件和子目录的数组
           */
    files = fs.readdirSync(url);
    files.forEach(function(file, index) {

      const curPath = path.join(url, file);
      /**
               * fs.statSync同步读取文件夹文件，如果是文件夹，在重复触发函数
               */
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);

      } else {
        fs.unlinkSync(curPath);
      }
    });
    /**
           * 清除文件夹
           */
    fs.rmdirSync(url);
    return true;
  }
  console.log('给定的路径不存在，请给出正确的路径:', url);
}


// TODO
exports.initDir = path => {
  try {
    fs.accessSync(path);
  } catch (e) {
    fs.mkdirSync(path);
  }
};

exports.rmdirSync = path => deleteFolderRecursive(path);


exports.camelCase = str => str.replace(/_\w/g, val => val[1].toUpperCase());

exports.readFile = path => fs.readFileSync(path).toString();

exports.writeFile = (path, content) => fs.writeFileSync(path, content);

exports.firstChatUpperCase = str => str.charAt(0).toUpperCase() + str.slice(1);
