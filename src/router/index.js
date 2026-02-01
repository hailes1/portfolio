import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/Home.vue'
import ChartingComponent from '../components/Charting.vue'

const routes = [
  {
    path: '/',
    component: HomeComponent,
    props: true, // Pass all route-related properties as props
  },
  {
    path: '/charting',
    component: ChartingComponent,
    props: true, // Pass all route-related properties as props
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
