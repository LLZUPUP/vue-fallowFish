import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/pages/Search'
import Category from '@/pages/Category'
import Near from '@/components/near/Near'
import New from '@/components/new/New'
import Index from '@/pages/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/new',
      component: Index,
      children: [
        {
          path: '/new',
          component: New
        },
        {
          path: '/near',
          component: Near
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/category',
      component: Category
    },
    
  ]
})
