import Login from "./components/LoginPage"
import PieChart from "./components/PieChart"
import Home from "./components/HomePage"
import About from "./components/AboutPage"
import ChartForm from "./components/ChartFormPage"
// import { useCookies } from "vue3-cookies";

import { createWebHistory, createRouter } from 'vue-router';
import store from '@/store';

// const { cookies } = useCookies();

// const isAuthenticated = false;
const isAuthenticated = store.state.isAuthenticated;

const beforeAuth = isAuth => (from, to, next) => {
  console.log(isAuthenticated);
  console.log(isAuth);
  if ((isAuthenticated && isAuth) || (!isAuthenticated && !isAuth)) {
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
