import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: "/dashboard"
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta:{
        title:'欢迎来到中新智擎!'
      },
      component: (resolve) => { require(['@/views/DashBoard'], resolve) }
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
})
export default router;
