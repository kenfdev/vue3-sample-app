import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import LoginPageVue from '@/pages/LoginPage.vue';
import { authenticationGuard } from './authGuard';
import HomePageVue from '@/pages/HomePage.vue';
import UserListPageVue from '@/pages/users/UserListPage.vue';
import CurrenciesPageVue from '@/pages/currencies/CurrenciesPage.vue';

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
  {
    path: '/users',
    name: 'Users',
    component: UserListPageVue,
    beforeEnter: authenticationGuard,
  },
  {
    path: '/currencies',
    name: 'Currencies',
    component: CurrenciesPageVue,
    beforeEnter: authenticationGuard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
