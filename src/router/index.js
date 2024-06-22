import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import SigninView from '../views/SigninView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: SigninView
    },
    {
      path: '/list',
      name: 'list',
      component: ProjectView
    }
  ]
})

export default router
