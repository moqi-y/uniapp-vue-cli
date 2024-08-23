# 基于 vue-cli 创建 uni-app 项目
> ## 关于项目
> 这是一个使用 vue-cli 创建 uni-app 项目的模板，基于 Vue3 + Vite 版本。
> ## 关于三方库
> 项目已安装组件库 `wot-design-uni`并已配置好按需引入，直接使用组件即可，无需再引用。文档地址：[https://wot-design-uni.pages.dev](https://wot-design-uni.pages.dev/)
>
> 项目已安装路由库`uni-mini-router`并已配置好。文档地址：[https://moonofweisheng.github.io/uni-mini-router](https://moonofweisheng.github.io/uni-mini-router/)

## 项目中路由的使用方法
1. 在页面中引入路由并获取路由实例
```javascript
import { useRouter } from 'uni-mini-router';  // 引入uni-mini-router路由
let router = useRouter() // 获取路由实例
```     
2. 使用路由实例进行跳转
```javascript
// 字符串路径
router.push('pages/setting/index')
// 带有路径的对象
router.push({ path: 'pages/setting/index' })
// 带查询参数，结果是 pages/setting/index?username=张三
router.push({ path: 'pages/setting/index', query: { username: '张三' } }) 
// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面，相当于使用 uni.switchTab(OBJECT) 
 router.pushTab({ path: 'pages/index/index'})
```  
3 . 获取路由参数
```javascript
import { onLoad } from '@dcloudio/uni-app' // 引入onLoad方法
onLoad((options) => {
  console.log(options) // 获取路由参数
})
```
4. 路由守卫
路由守卫在`src/router/index.ts`文件内，可自行修改配置
```javascript
// src\router\index.ts
/**
 * 全局路由守卫
 */
const guardList = ["/pages/setting/index"]; // 需要登录的页面
router.beforeEach((to, from, next) => {
  if (guardList.includes(to.path || "")) {
    // 判断是否登录,如果未登录则跳转到登录页面,登录成功后跳转到之前的页面
    // setTimeout(() => {
    //   router.push({
    //     path: '/pages/login/index'
    //   })
    // }, 1000)
    uni.showToast({
      title: '请先登录',
      icon: 'error'
    })
    next(false) // 取消导航
  }
  next() // 放行
})
```

# 从零搭建基于 vue-cli 的 uni-app 项目
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