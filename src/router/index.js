import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/home/index.vue';
import HomeSearch from '@/pages/search/HomeSearch.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  { path: '/', redirect: '/home' },
  { path: '/home/search', name: 'homeSearch', component: HomeSearch },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;