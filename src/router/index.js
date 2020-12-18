import Vue from 'vue'
import VueRouter from 'vue-router'
import signin from 'components/signin/signin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signin',
    component: signin
  }
]

const router = new VueRouter({
  routes
})

export default router
