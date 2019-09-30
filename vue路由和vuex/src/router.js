import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import goods1 from './views/goods1.vue'
import store from './store'
Vue.use(Router)

const router = new Router({ 
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      children: [
        { path: 'goods1/:id', name: 'goods1', component: goods1, props: true }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
//  路由守卫
router.beforeEach((to,from,next)=>{
    if(to.path === '/about' && !store.state.isLogin){
      next('/login?redirect='+to.path)
    }else{
      next()
    }
})
export default router
