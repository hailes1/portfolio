import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../experiments/Home.vue'
import ChartingComponent from '../experiments/ExperimentCharting.vue'
import ExperimentScrollComponent from '../experiments/ExperimentScroll.vue'
import ExperimentShadowsComponent from '../experiments/ExperimentShadows.vue'

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
  {
    path: '/experiment-scroll',
    component: ExperimentScrollComponent,
    props: true,
  },
  {
    path: '/experiment-shadows',
    component: ExperimentShadowsComponent,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
