import Login from "./components/LoginPage"
import PieChart from "./components/PieChart"
import Home from "./components/HomePage"
import About from "./components/AboutPage"
import ChartForm from "./components/ChartFormPage"
// import {computed} from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import store from '@/store';

const beforeAuth = isAuth => (from, to, next) => {
  console.log(store.state.isAuthenticated); //다시 false로 바뀜
  console.log(isAuth);
  console.log(store);
  if ((store.state.isAuthenticated && isAuth) || (!store.state.isAuthenticated && !isAuth)) {
    return next()
  } else {
    next("/");  
  }
}

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: beforeAuth(false),
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: PieChart,
      beforeEnter: beforeAuth(true),
    },
    {
      path: '/chartform',
      name: 'ChartForm',
      component: ChartForm,
      beforeEnter: beforeAuth(true),
    }
  ];

export default createRouter({
  history: createWebHistory(),
  routes,
});
