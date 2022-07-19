import Login from "./components/LoginPage"
import PieChart from "./components/PieChart"
import Home from "./components/HomePage"
import About from "./components/AboutPage"
import ChartForm from "./components/ChartFormPage"
import PieChartTemp from "./components/PieChartTemp"
// import { useCookies } from "vue3-cookies";

import { createWebHistory, createRouter } from 'vue-router';

const ID_TOKEN_KEY = "Acess-Token";
// const { cookies } = useCookies();

const isAuthenticated = window.localStorage.getItem(ID_TOKEN_KEY);

const beforeAuth = isAuth => (from, to, next) => {
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
      beforeEnter: beforeAuth(false),
    },
    {
      path: '/chartform',
      name: 'ChartForm',
      component: ChartForm,
      beforeEnter: beforeAuth(false),
    },
    {
      path: '/testchart',
      name: 'Testchart',
      component: PieChartTemp,
    },
  ];

export default createRouter({
  history: createWebHistory(),
  routes,
});
