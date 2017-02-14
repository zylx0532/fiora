# Fiora

[![Build Status](https://travis-ci.org/yinxin630/fiora.svg?branch=master)](https://travis-ci.org/yinxin630/fiora)
[![author](https://img.shields.io/badge/author-%E7%A2%8E%E7%A2%8E%E9%85%B1-blue.svg)](http://suisuijiang.com)
[![Node.js Version](https://img.shields.io/badge/node.js-7.0.0-blue.svg)](http://nodejs.org/download)
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

该项目依赖于node.js(>= 7.0)和mongodb数据库. 安装[node.js](https://npm.taobao.org/mirrors/node). 安装[mongodb](https://docs.mongodb.com/manual/installation/).

0. 克隆项目到本地
`git clone git@github.com:yinxin630/fiora.git`
0. 进行项目目录执行
`yarn` 或者 `npm install`
0. 依照模板配置文件创建项目配置文件, 其中 `devServer`, `devPort`, `database`, `jwtSecret` 等字段是必需的.
`cp config/project.example.js config/project.js`
0. 运行项目服务端
`yarn run server` 或者 `npm run server`
0. 运行项目客户端
`yarn run dev` 或者 `npm run dev`
0. 打开 `http://localhost:8080` 查看效果

## Script

* `server`: 启动服务端
* `dev`: 启动客户端
* `build`: 构建发布版本客户端
* `redexServer`: 启动redux调试工具服务
* `rnServer`: 启动react native开发服务
* `android`: 启动安卓客户端
* `ios`: 启动客户端
* `test`: 执行测试
* `eslint`: 执行eslint检查

## 运行截图

![](screenshot_01.png)

## 目录结构

    |-- [android]                 // react-native android 文件夹
    |-- [build]                   // webpack配置
    |-- [config]                  // 配置
    |    |-- project.js           // 项目配置(需要自己创建)
    |    |-- project.example.js   // 项目配置示例
    |    |-- webpack.js           // webpack配置
    |-- [ios]                     // react-native ios 文件夹
    |-- [public]                  // 打包输出文件夹
    |-- [src]                     // 源码
    |    |-- client               // 客户端代码
    |    |    |-- [action]        // redux action定义
    |    |    |-- [assets]        // 资源
    |    |    |-- [common]        // 公共组件
    |    |    |-- [middleware]    // 消息处理中间件
    |    |    |-- [reducer]       // redux reducer定义
    |    |    |-- [rnMobile]      // react native客户端
    |    |    |-- [util]          // 工具函数
    |    |    |-- [webMobile]     // mobile web客户端
    |    |    |-- [webPc]         // pc web客户端
    |    |    |-- api.js          // web全局api
    |    |    |-- index.html      // html模板
    |    |    |-- socket.js       // socket.io client
    |    |    |-- store.js        // redux store定义
    |    |-- server               // 服务端代码
    |    |    |-- [model]         // 数据库模型定义
    |    |    |-- [police]        // 权限相关
    |    |    |-- [route]         // 路由
    |    |    |-- [util]          // 工具函数
    |    |    |-- app.js          // 入口
    |-- .babelrc                  // babel配置
    |-- .buckconfig               // react native所需配置
    |-- .eslintignore             // eslint忽略配置
    |-- .eslintrc.json            // eslint规则配置
    |-- .flowconfig               // react native所需配置
    |-- .gitignore                // git忽略配置
    |-- .watchmanconfig           // react native所需配置
    |-- package.json              // npm
    |-- yarn.lock                 // yarn
    ...

## 贡献代码

如果你想要添加功能或者修复BUG. 请遵守下列流程.

0. fork本仓库并克隆fork后的仓库到本地
0. 安装依赖 `npm install`
0. 修改代码并确认无bug
0. 提交代码, 如果eslint有报错, 请修复后再次提交
0. 创建一个pull request
