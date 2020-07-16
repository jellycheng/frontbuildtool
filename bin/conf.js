const path = require("path");
const merge = require('webpack-merge');
//工作目录
const CWD = process.cwd();
//加载工作目录下/conf/env/xxx.js的配置文件
const confEnv = global.confEnv = require(path.join(CWD, `conf/env/${global.confFile || 'dev'}.js`));
const confCommon = require(path.join(CWD, 'conf/conf.js'));
//配合配置
module.exports = merge(confEnv,confCommon);
