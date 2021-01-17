#!/usr/bin/env node

//命令帮助：node ./bin/index.js -h
//执行构建示例：NODE_ENV=production ST=1 ./bin/index.js -b cjs
//const pa = process.argv;
const webpack = require('webpack');
const chalk = require('chalk');
const CWD = process.cwd();
const program = require('./program');
const po = program.opts();
const ora = require('ora');
// global.smp = null;
console.log(`当前工作目录是: ${CWD}`);

//获取--analyzer选项值
global.analyzer = program.analyzer;

if (program.devConf) {//启动本地web服务,用于开发,node ./bin/index.js -d cjs
  global.confFile = po.devConf;
  require('../server');
  return;
}

if (program.buildConf) {//构建工程，node ./bin/index.js -b cjs
  global.confFile = po.buildConf;
  const configs = require('../webpack.prod');
  const spinner = ora('building ...');
  spinner.start();//开启loading
  const compiler = webpack(configs, (err, stats) => {
    spinner.stop();
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      process.exit(1);
      return;
    }

    const info = stats.toJson();
    if (stats.hasErrors()) {
      console.error(info.errors);
      process.exit(1);
    }

    if (stats.hasWarnings()) {
      console.warn(info.warnings);
      process.exit(1);
    }
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }) + '\n\n'
    );
    console.log(chalk.cyan('Build complete.\n'));
  });
  return;
}

//创建工程：node ./bin/index.js -p 工程目录名
if (program.projectName) {
  global.projectName = program.projectName || 'myproject';
  require('../repo');
  return;
}
