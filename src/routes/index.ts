import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import Category from '../pages/category/Category.vue';

const routes: Array<RouteRecordRaw> = [{ path: '/', component: Category }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
