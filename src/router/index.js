import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Search from '@/pages/Search'
import Category from '@/pages/Category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/category',
      component: Category
    }
  ]
})
