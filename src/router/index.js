import Vue from 'vue'
import VueRouter from 'vue-router'

import sign from 'views/sign/sign.vue'
import signIn from 'views/sign/childComps/signIn.vue'
import signUp from 'views/sign/childComps/signUp.vue'
import resetPs from 'views/sign/childComps/resetPs.vue'

import accountDetail from 'views/accountDetail/accountDetail.vue'

import main from 'views/main/main.vue'
import tools from 'views/main/childComps/toolsPage/tools.vue'
import home from 'views/main/childComps/home/home.vue'
// import colShow from 'views/main/childComps/collection/colShow.vue'

Vue.use(VueRouter)

const routes = [

  // {
  //   path: '/',
  //   component: accountDetail
  // },

  {
    path: '/',
    redirect: '/main/tools'
  },
  {
    path:'/main',
    component: main,
    children:[{
      path: 'tools',
      component: tools
    },{
      path: 'home',
      component: home
    }]
  },
  {
    path: '/account',
    component: accountDetail,
  },
  {
    path: '/sign',
    component: sign,
    children:[
      {
        path: 'signIn',
        component: signIn
      },
      {
        path: 'signUp',
        component: signUp
      },
      {
        path: 'resetPs',
        component: resetPs
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
