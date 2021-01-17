//本文件用途： 合并配置文件
const path = require("path");
const merge = require('webpack-merge');
//工作目录
const CWD = process.cwd();
//加载 当前工作目录下/conf/env/xxx.js的配置文件
const confEnv = global.confEnv = require(path.join(CWD, `conf/env/${global.confFile || 'dev'}.js`));
//加载 当前工作目录下/conf/conf.js的配置文件
const confCommon = require(path.join(CWD, 'conf/conf.js'));
//合并配置并抛出
module.exports = merge(confEnv,confCommon);
