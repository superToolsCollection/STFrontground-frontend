import Vue from 'vue'
import VueRouter from 'vue-router'

import sign from 'components/sign/sign.vue'
import signIn from 'components/sign/childComps/signIn.vue'
import signUp from 'components/sign/childComps/signUp.vue'
import resetPs from 'components/sign/childComps/resetPs.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect: '/sign/signIn'
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
