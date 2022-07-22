import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import OnameView from '@/views/OnameView.vue'
const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventListView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/organizer',
    name: 'organizer',
    component: OnameView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
