import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import stayApp from '../views/stayApp.vue'
import signUp from '../components/stay-signup.vue'
import stayDetails from '../views/stay-details.vue'
import stayEdit from '../views/stay-edit.vue'
import userDetails from '../views/user-details.vue'
import backOffice from '../views/stay-backOffice.vue'
import superhost from '../components/superhost.vue'
import backOffice1 from '../views/stay-backOffice.copy.vue'
import chat from '../views/chat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/superhost',
    name: 'superhost',
    component: superhost
  },
  {
    path: '/office',
    name: 'office',
    component: backOffice
  },
  {
    path: '/office1',
    name: 'office1',
    component: backOffice1
  },
  {
    path: '/sign-up',
    name: 'signUp',
    component: signUp
  },
  {
    path: '/explore/:place?',
    name: 'explore',
    component: stayApp
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat
  },
  {
    path: '/stay/details/:stayId',
    name: 'stay-details',
    component: stayDetails
  },
  {
    path: '/stay/edit/:stayId?',
    name: 'stay-edit',
    component: stayEdit
  },
  {
    path: '/host',
    component: stayEdit
  },
  {
    path: '/user/:id',
    name: 'user-details',
    component: userDetails
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
