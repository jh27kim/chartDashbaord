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
  // 로그인을 안했는데 인증이 필요한 사이트 방문 (/login) or 로그인을 했는데 인증이 필요없는 사이트를 방문 (그자리에 stay) 
  if ((store.state.isAuthenticated && isAuth) || (!store.state.isAuthenticated && !isAuth)) {
    return next()
  } else {
    next("/login");  // 가려고 하는 URL을 PARAMETER로 전달해줘서, 
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
