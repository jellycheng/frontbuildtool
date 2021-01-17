const path = require("path");
const CWD = process.cwd();

//根据当前工作目录拼接路径
function resolve(dir) {
    return path.join(CWD, dir || '');
}

//把地址分隔成域名和目录
function getPublicPathAndBase(outPublicPath) {
    let publicPath = outPublicPath, basePath = 'static';
    publicPath.replace(/((?:(?:https|http?:)?\/\/[\w-]+(?:\.[\w-]+)+)?\/?)?(.*)/, function(all, domain, base){
        publicPath = domain || ''; //域名，如http://www.xxx.com
        basePath = base;   //目录
    });

    return {
        publicPath, 
        basePath
    }
}

//显示进度 todo
const progress = ( message, ...args) => {
    console.info( message, ...args);
};

module.exports = {
    getPublicPathAndBase,
    resolve,
    progress
};