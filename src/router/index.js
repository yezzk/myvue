import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/home/Home.vue')
const Free = () => import('@/views/free/Free.vue')
const Charge = () => import('@/views/charge/Charge.vue')
const Sell = () => import('@/views/sell/Sell.vue')
const Profile = () => import('@/views/profile/Profile.vue')

const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/free',
    component:Free
  },
  {
    path:'/charge',
    component:Charge
  },
  {
    path:'/sell',
    component:Sell
  },
  {
    path:'/profile',
    component:Profile
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
