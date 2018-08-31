import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home.vue'
import NotFound from '@/views/404.vue'
import demo from '@/views/demo.vue'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[{
      	path: '/demo',
	    name: 'demo',
	    component: demo
      }]
    },{
  		path:'*',
  		component:NotFound
  	}
  ]
})
