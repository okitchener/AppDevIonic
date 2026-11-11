import { createRouter, createWebHistory } from '@ionic/vue-router';
import type { RouteRecordRaw } from 'vue-router';

import AlcoholPage from '../views/AlcoholPage.vue';
import BmiPage from '../views/BmiPage.vue';
import HomePage from '../views/HomePage.vue';
import MorsePage from '../views/MorsePage.vue';
import TabsPage from '../views/TabsPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/tabs/home',
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home',
      },
      {
        path: 'home',
        name: 'Home',
        component: HomePage,
      },
      {
        path: 'bmi',
        name: 'BMI',
        component: BmiPage,
      },
      {
        path: 'morse',
        name: 'Morse',
        component: MorsePage,
      },
      {
        path: 'alcohol',
        name: 'Alcohol',
        component: AlcoholPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
