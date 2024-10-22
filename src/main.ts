import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import router from './routes/index.ts';
import { createPinia } from 'pinia';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { GiHotMeal, GiChefToque, FaHome } from 'oh-vue-icons/icons';

const pinia = createPinia();
addIcons(GiHotMeal, GiChefToque, FaHome);

createApp(App)
  .use(router)
  .use(pinia)
  .component('v-icon', OhVueIcon)
  .mount('#app');
