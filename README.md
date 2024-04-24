# wonder-vue

This template should help get you started developing with Vue 3 in Vite.

[Vue.js官网](https://cn.vuejs.org/)
Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。

[响应式](https://cn.vuejs.org/guide/extras/reactivity-in-depth.html)
组件状态都是由响应式的 JavaScript 对象组成的。当更改它们时，视图会随即自动更新。

## 创建项目

```sh
winpty npm.cmd create vue@latest to create vue
```

这个命令会安装和执行 create-vue，它是 Vue 提供的官方脚手架工具。跟随命令行的提示继续操作即可。

## VSCode设置

Recommended IDE Setup
推荐使用的 IDE 是 VSCode，配合 Vue - Official 扩展 (之前是 Volar)。该插件提供了语法高亮、TypeScript 支持，以及模板内表达式与组件 props 的智能提示。
[VSCode官网](https://code.visualstudio.com/)
[Volar官网](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Vite

[Vite官网](https://cn.vitejs.dev/guide/)

### 创建vite项目

npm create vite@latest

npm create vite@latest my-vue-app -- --template vue

[Vite项目模板](https://github.com/vitejs/awesome-vite#templates)

### 工程说明

在一个 Vite 项目中，index.html是该 Vite 项目的入口文件。

Vite 也有 “根目录” 的概念，即服务文件的位置，在接下来的文档中你将看到它会以 <root> 代称

### 配置说明

vite --config my-config.js

不指定配置文件时，默认加载vite.config.js

Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

vite对vue的支持

@vitejs/plugin-vue
@vitejs/plugin-vue-jsx

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

ESLint 是一个开源项目，可帮助你查找和修复 JavaScript 代码中的问题。无论你是在浏览器中还是在服务器上编写 JavaScript，无论是否使用框架，ESLint 都可以帮助你的代码发挥最大的作用。

```sh
npm run lint
```

### 项目依赖

#### vue

npm install vue

#### vue-router

npm install vue-router@4

#### pinia

Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。
npm install pinia

#### less.js

Less.js 是将 Less 样式转换为 CSS 样式的 JavaScript 工具
npm install less -D

#### vue-i18n

[官网](https://vue-i18n.intlify.dev/)
[文档](https://vue-i18n.intlify.dev/guide/introduction.html)
npm install vue-i18n@9

#### axios

npm install axios

#### nprogress

npm install nprogress

#### tiny vue

npm install @opentiny/vue@3

npm install @opentiny/unplugin-tiny-vue -D

npm install @opentiny/vue-vite-import

// vite.config.ts

import autoImportPlugin from '@opentiny/unplugin-tiny-vue'

export default {
plugins: [autoImportPlugin()]
}

### 常见写法
