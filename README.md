# 基于 vue-cli 创建 uni-app 项目
> ## 关于项目
> 这是一个使用 vue-cli 创建 uni-app 项目的模板，基于 Vue3 + Vite 版本。
> ## 关于三方库
> 项目已安装组件库 `wot-design-uni`并配置好按需引入。文档地址：[https://wot-design-uni.pages.dev](https://wot-design-uni.pages.dev/)
>
> ## 运行本项目
> 1. 克隆项目
> 2. 安装依赖       
> `npm install`
> 3. 运行项目       
>   `npm run dev:h5`  # 运行h5端        

## 1. 安装 vue-cli
```bash
npm install -g @vue/cli
```

## 2. 创建 uni-app 项目，使用Vue3/Vite版
```bash
npx degit dcloudio/uni-preset-vue#vite my-vue3-project
```

## 3. 进入项目目录
```bash
cd my-vue3-project
```

## 4. 安装依赖
```bash
npm install
```

## 5. 运行项目
```bash
npm run dev:h5 # 运行到浏览器
npm run dev:mp-weixin  # 运行到微信小程序
```
## 6. 打包项目
```bash
npm run build:h5 # 打包到浏览器
npm run build:app-plus # 打包到app
npm run build:mp-weixin  # 打包到微信小程序
```
## 其他
- [uni-app 官方文档-vue-cli](https://uniapp.dcloud.net.cn/quickstart-cli.html)
- 本项目使用 [vue3](https://v3.cn.vuejs.org/)
- Vite 官方文档 [https://vitejs.dev/](https://vitejs.dev/)