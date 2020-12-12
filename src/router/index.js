import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Letter from '../views/Letter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/letter',
    name: 'Letter',
    component: Letter
  }
];
const router = new VueRouter({
  routes
})

export default router
