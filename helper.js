const path = require("path");
const CWD = process.cwd();

function resolve (dir) {
    return path.join(process.cwd(), dir || '');
}

function getPublicPathAndBase (outPublicPath) {
    let publicPath = outPublicPath, basePath = 'static';
    publicPath.replace(/((?:(?:https|http?:)?\/\/[\w-]+(?:\.[\w-]+)+)?\/?)?(.*)/, function(all, domain, base){
        publicPath = domain || '';
        basePath = base;
    });

    return {
        publicPath, 
        basePath
    }
}

// 显示进度
const progress = (percentage, message, ...args) => {
    console.info(percentage, message, ...args);
};

module.exports = {
    getPublicPathAndBase,
    resolve,
    progress
};