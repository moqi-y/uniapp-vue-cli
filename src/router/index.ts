import { createRouter } from 'uni-mini-router'
// 导入pages.json
import pagesJson from '../pages.json'
// 引入uni-parse-pages
import pagesJsonToRoutes from 'uni-parse-pages'
// 生成路由表
const routes = pagesJsonToRoutes(pagesJson)
const router = createRouter({
  routes: [...routes] // 路由表信息
})

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

export default router