import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/signup', name: 'Signup', component: Signup },
    { path: '/app', name: 'Main', component: Main }
  ]
})
