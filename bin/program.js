const program = require('commander');
const path = require('path');
const packageData = require(path.resolve(__dirname, '../package.json'));

program.usage('<options> ').description("前端项目构建工具")
  .option('-p, --project-name <projectName>', 'create project，工程目录保存在当前工作目录下，如：frontendbuildtool -p xiaoxiao-manage')
  .option('-d, --dev-conf <confFile>', 'server starting，如：frontendbuildtool -d dev')
  .option('-b, --build-conf <confFile>', 'build project，如：frontendbuildtool -b st1')
  .option('-a, --analyzer', 'build analyzer')
  .version(packageData.version);

program.parse(process.argv);

module.exports = program;
