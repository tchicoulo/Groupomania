import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/sign-up',
    name: 'Sign-up',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('../views/Posts')
  },
  {
    path: '/newpost',
    name: 'NewPost',
    component: () => import('../views/NewPost')
  },
  {
    path: '/deleteuser',
    name: 'DeleteUser',
    component: () => import('../views/DeleteUser')
  },
  {
    path: '/post/:id',
    name: 'PostId',
    component: () => import("../views/PostId")
  },
  {
    path: '/modifypost',
    name: 'ModifyPost',
    component: () => import("../views/ModifyPost")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
