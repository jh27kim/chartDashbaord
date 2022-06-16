import Login from "./components/LoginPage";
import PieChart from "./components/PieChart"
import Home from "./components/HomePage"
import Signup from "./components/SignupPage"

import { createWebHistory, createRouter } from 'vue-router';


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
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: PieChart,
    },
  ];

export default createRouter({
  history: createWebHistory(),
  routes,
});
