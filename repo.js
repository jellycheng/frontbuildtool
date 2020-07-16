const download = require('download-git-repo');
const chalk = require('chalk');  
const ora = require('ora');
const path = require("path")  
const fs = require('fs');  
const inquirer = require('inquirer');
const promptList = require('./promptList.config');
//const pa = process.argv;
global.config = {};
//工程目录名
const projectName = global.projectName;

//交互提示ui
inquirer.prompt(promptList.frameConf).then(answers => {
    global.config.frame = answers.frame;
    readyDownloadDir(answers.frame);//选择的选项值
});

// 开始准备下载
function readyDownloadDir (frame) {
    fs.exists(path.resolve(`./${projectName}`), function(exists) {
        if (exists) {
            inquirer.prompt(promptList.projectCheckConf).then(answers => {
                if (answers.isProjectCreate) {//同意重新下载
                    createProject(frame);
                } else {
                    console.log("项目已经存在，未下载")
                    process.exit();
                }
            });
        } else {
            createProject(frame);
        }
    });
}

//下载远程git代码创建项目
function createProject(frame) {
    //回头改成对应的模板仓库，现在是假的，todo
    const tempDir = frame === 'vue' ? 'github:jellycheng/cjsJsLib' : 'github:jellycheng/cjsJsLib';
    const spinner = ora(chalk.yellow('Create start')).start();

    spinner.color = 'blue';
    spinner.text = 'Creating project directory...';

    download(tempDir, projectName, function (err) {
        if (err) {
            throw err;
            return;
        }
        spinner.text = chalk.blue('Project directory created successfully');
        spinner.succeed();
        spinner.stop();
        spinner.clear();
        process.exit();
    });
}

