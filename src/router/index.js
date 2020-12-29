import Vue from 'vue'
import VueRouter from 'vue-router'

import sign from 'views/sign/sign.vue'
import signIn from 'views/sign/childComps/signIn.vue'
import signUp from 'views/sign/childComps/signUp.vue'
import resetPs from 'views/sign/childComps/resetPs.vue'

import accountDetail from 'views/accountDetail/accountDetail.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: accountDetail
  },

  // {
  //   path: '/',
  //   redirect: '/sign/signIn'
  // },

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
