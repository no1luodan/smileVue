import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShoppingMall from '@/components/ShoppingMall'
import SwiperDefault from '@/components/SwiperDefault'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
alias:'/home',
      name: 'ShoppingMall',
      component: ShoppingMall
    },
    {
      path: '/s',
      name: 'SwiperDefault',
      component: SwiperDefault
    }
  ]
})
