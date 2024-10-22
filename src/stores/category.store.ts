import { defineStore } from 'pinia';
import axios from 'axios';
import { ICategoriesStore } from '../utils/type/category.type';

export const useCategoryStore = defineStore('categories', {
  state: (): ICategoriesStore => ({
    categories: [],
    loading: false,
  }),
  actions: {
    async fetchAllCategories(): Promise<void> {
      this.loading = true;
      try {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/categories.php'
        );
        this.categories = response.data.categories;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
