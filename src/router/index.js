import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/Home.vue'
import MotionComponent from '../components/motion.vue'

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/motion', component: MotionComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
