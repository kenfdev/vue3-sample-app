import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import LoginPageVue from '@/pages/LoginPage.vue';
import { authenticationGuard } from './authGuard';
import HomePageVue from '@/pages/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePageVue,
    beforeEnter: authenticationGuard,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPageVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
