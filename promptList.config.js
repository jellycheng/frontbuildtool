//inquirer 包的配置：一组通用的交互式命令行用户界面包
const promptList = {
    frameConf:[{//第1次提示配置
        type: 'rawlist',
        message: '请选择框架',
        name: 'frame', //设置变量名
        choices: [
            "vue",
            "react",
        ]
    }],
    projectCheckConf: [{ //再次确认配置
        type: "confirm",
        message: "该目录已存在，是否重新创建？",
        name: "isProjectCreate",
    }]
};

module.exports = promptList;