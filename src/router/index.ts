import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import CategoriesView from '@/views/CategoriesView.vue'
import CategoryDetailsView from '@/views/CategoryDetailsView.vue'

const routes: Array<RouteRecordRaw> = [
  { 
    path: '/',
    component: CategoriesView
  },
  { 
    path: '/category/:id',
    component: CategoryDetailsView
  },
  {
    path: '/product/:id',
    component: ProductDetailsView, props: true,
  },
  { 
    path: '/cart', 
    // route level code-splitting
    // this generates a separate chunk (cart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
