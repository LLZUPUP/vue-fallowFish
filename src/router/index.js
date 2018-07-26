import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Search from '@/pages/Search'

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
    }
  ]
})
