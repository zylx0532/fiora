# Fiora

[![author](https://img.shields.io/badge/author-%E7%A2%8E%E7%A2%8E%E9%85%B1-blue.svg)](http://suisuijiang.com/)
[![Node.js Version](https://img.shields.io/badge/node.js-7.0.0-blue.svg)](http://nodejs.org/download/)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)

语言: [English](readme.md) | [简体中文](readme-zh.md)

Fiora是一款web聊天应用. 使用node.js, koa和react编写.

## 功能

0. 创建用户, 创建群组, 加入群组, 私聊, 群聊
0. 文本, 图片, 代码, url等多种类型消息
0. 桌面通知, 声音提醒, 通知开关
0. 头像修改, 表情收藏, 群组公告修改
0. 消息长度限制, 消息发送频率限制
0. 简易的插件系统

## 安装

该项目依赖于node.js(>= 6.0, 推荐使用6.9.1)和mongodb数据库. 安装[node.js](https://nodejs.org/en/download/) ([中国镜像](https://npm.taobao.org/mirrors/node)). 安装[mongodb](https://docs.mongodb.com/manual/installation/).

0. 从 `https://github.com/yinxin630/fiora` 克隆项目到本地
0. 进行项目目录执行 `npm install`
0. 创建配置文件 `cp config/config.simple.js config/config.js`. 编辑配置文件来设置数据库和其它参数, 其中 `localServer`, `localPort`, `database`, `jwtSecret` 是必需的.
0. 运行项目 `npm start`
0. 打开 `http://localhost:8080/webpack-dev-server/` 查看效果

## Script

* `start`: 启动后端服务, redux调试服务, pc端web开发服务和mobile端web开发服务
* `devPc`: 启动pc端web开发服务
* `devMobile`: 启动mobile端web开发服务
* `buildPc`: 构建pc端web发布版本
* `buildMobile`: 构建mobile端web发布版本
* `rnServer`: 启动react native开发服务
* `android`: 启动react native安卓客户端
* `ios`: 启动react native ios客户端
* `eslint`: 执行eslint检查

## 运行截图

![](screenshot_01.png)

## 目录结构

    |-- [android]                 //react-native android 文件夹
    |-- [bin]                     //可执行的脚本工具
    |    |-- develop.js           //开发环境服务端hot-reload支持
    |    |-- reduxDevServer.js    //redux-devtool本地服务
    |-- [config]                  //项目配置文件
    |    |-- config.simple.js     //示例配置文件
    |-- [ios]                     //react-native ios 文件夹
    |-- [public]                  //文件服务器根目录
    |-- [src]                     //源码
    |    |-- client               //客户端代码
    |    |    |-- [action]        //redux action定义
    |    |    |-- [assets]        //资源
    |    |    |-- [common]        //公共组件
    |    |    |-- [middleware]    //消息处理中间件
    |    |    |-- [reducer]       //redux reducer定义
    |    |    |-- [rnMobile]      //react native客户端
    |    |    |-- [util]          //工具函数
    |    |    |-- [webMobile]     //mobile web客户端
    |    |    |-- [webPc]         //pc web客户端
    |    |    |-- api.js          //web全局api
    |    |    |-- socket.js       //socket.io client
    |    |    |-- store.js        //redux store定义
    |    |-- server               //服务端代码
    |    |    |-- [model]         //数据库模型定义
    |    |    |-- [police]        //权限相关
    |    |    |-- [route]         //路由
    |    |    |-- [util]          //工具函数
    |    |    |-- app.js          //入口
    |-- [webpack]                 //webpack 配置文件
    |    |-- webpackk.dev.js      //webpack dev环境配置
    |    |-- webpack.prod.js      //webpack 发布环境配置
    |-- .babelrc                  //babel配置
    |-- .buckconfig               //react native所需配置
    |-- .eslintignore             //eslint忽略配置
    |-- .eslintrc.json            //eslint规则配置
    |-- .flowconfig               //react native所需配置
    |-- .gitignore                //git忽略配置
    |-- .watchmanconfig           //react native所需配置
    |-- package.json              //npm
    ...

## 贡献代码

如果你想要添加功能或者修复BUG. 请遵守下列流程.

0. fork本仓库并克隆fork后的仓库到本地
0. 安装依赖 `npm install`
0. 修改代码并确认无bug
0. 提交代码, 如果eslint有报错, 请修复后再次提交
0. 创建一个pull request

## 期待

### v1.1

* ~~web移动端支持~~
* ~~自己的消息改为发送前添加~~
* ~~使用中文时间格式化~~

### v1.2

* 主题机制
* 消息加密机制
* 导航栏功能优化
* 用户设置服务器保存
