import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import index from "../views/landing-page/index.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/:sectionName?",
    name: "Home",
    component: index,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
