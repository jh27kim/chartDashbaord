import Login from "./components/LoginPage"
import PieChart from "./components/PieChart"
import Home from "./components/HomePage"
import About from "./components/AboutPage"
import ChartForm from "./components/ChartFormPage"
import PieChartTemp from "./components/PieChartTemp"

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
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: PieChart,
    },
    {
      path: '/chartform',
      name: 'ChartForm',
      component: ChartForm,
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
