import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import Category from '../pages/category/Category.vue';
import CategoryDetail from '../pages/category/CategoryDetail.vue';
import MealDetail from '../pages/meals/MealDetail.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Category },
  { path: '/:categoryName', component: CategoryDetail },
  { path: '/:categoryName/:id', component: MealDetail },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
