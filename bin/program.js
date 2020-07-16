const program = require('commander');
const path = require('path');
const packageData = require(path.resolve(__dirname, '../package.json'));

program.usage('<options> 前端项目构建命令')
  .option('-p, --project-name <projectName>', 'create project，如 -p 要保存的工程目录名')
  .option('-d, --dev-conf <confFile>', 'server starting')
  .option('-b, --build-conf <confFile>', 'build project')
  .option('-a, --analyzer', 'build analyzer')
  .version(packageData.version);

program.parse(process.argv);

module.exports = program;
