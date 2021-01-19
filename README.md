# frontendbuildtool
```
前端构建脚手架,webpack4，由于项目仅使用了 vue 框架，所以仅对 vue 进行了处理
```

### 安装
```
全局依赖安装frontendbuildtool包：
  npm i frontendbuildtool -g
  which frontendbuildtool
当前项目安装，并保存到开发依赖：-D, --save-dev: Package will appear in your devDependencies
  npm i frontendbuildtool -D

```

### 命令使用方式
```
// 创建项目
frontendbuildtool -p [工程目录名]

// 开发时启动本地web服务
frontendbuildtool -d [配置文件名] 
frontendbuildtool -d dev  //即加载的配置是./conf/env/dev.js

// 打包，配置文件名可理解为环境代号
frontendbuildtool -b [配置文件名]
frontendbuildtool -b production //即加载的配置是./conf/env/production.js
frontendbuildtool -b production -a //-a表示开启分析

```

### 推荐项目目录结构
```
├─.babelrc //babel配置
├─.eslintrc.js //eslint配置
├─.gitignore
├─README.md
├─index.html  //通用模板
├─package.json //项目配置，依赖配置
├─static  // 不需要编译的静态资源
├─src     //源码目录
   ├─api    //接口配置目录
      |- 业务模块
        |- yy.js
      |- xx.js  
   ├─assets  //静态资源
   |- common
   |- config //业务配置目录
   |- libs   //类库
   ├─widgets  //业务组建
   ├─views    //page组件
   ├─router   //路由
   ├─components  //通用组件
├─conf
   ├─conf.js  //不分环境的公共基础配置,启动或打包必会加载的配置
   ├─proxy.js  //代理需要的方法、配置等
   |-proxy    //代理需要的方法封装等目录
      |- xxx.js
   |-mocker.js //mocker需要的方法、配置等
   ├─mocker //mocker数据目录
      |- xxx.js
   ├─env   //一个开发者一个文件、一个环境一个文件
      |- st1.js
      |- pre.js
      |- prod.js
      |- cjs.js 

```

# frontendbuildtool内部配置加载顺序
```
本地开发时webpack加载顺序：
	frontendbuildtool/server.js
		|-frontendbuildtool/webpack.dev.js
			|- frontendbuildtool/webpack.vue.config.js
				|- frontendbuildtool/webpack.common.js
      |- 项目的conf/env/代号.js + 项目的conf/conf.js
      
打包时webpack加载顺序：
	frontendbuildtool/webpack.prod.js
		|- frontendbuildtool/webpack.vue.config
			|- frontendbuildtool/webpack.common.js
      |- 项目的conf/env/代号.js + 项目的conf/conf.js


```
