import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Type = () => import('../views/type/Type')
const Cart = () => import('../views/cart/Cart')
const User = () => import('../views/user/User')
const Detail = () => import('../views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/type',
    component: Type
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router