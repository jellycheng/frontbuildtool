var portfinder = require('portfinder');

module.exports = new Promise((resolve, reject) => {
  let confEnvPort = 0
  if(typeof global.confEnv != "undefined" && global.confEnv.port) {
    confEnvPort = global.confEnv.port
  }
  //基础端口，即从哪个端口开始扫描
  portfinder.basePort = process.env.PORT || confEnvPort || 8090;
  portfinder.getPort((err, port) => {
    if(err) {
      reject(err);
    } else {
      resolve(process.env.PORT = port);
    }
  });
});

/**
使用示例：
global.confEnv = {}
global.confEnv.port = 8082
var abc = require('../port');
abc.then(function(port){
    console.log("可用端口", port)
})
*/

