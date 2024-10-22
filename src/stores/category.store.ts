import { defineStore } from 'pinia';
import axios from 'axios';
import { ICategoriesStore } from '../utils/type/category.type';

export const useCategoryStore = defineStore('categories', {
  state: (): ICategoriesStore => ({
    categories: [],
    meals: [],
    loading: false,
    error: '',
  }),
  actions: {
    async fetchAllCategories(): Promise<void> {
      this.loading = true;
      try {
        const response = await axios.get('api/api/json/v1/1/categories.php');
        this.categories = response.data.categories;
      } catch (error) {
        this.error = 'Error while fetching data';
      }
      this.loading = false;
    },
    async fetchCategoryByName(categoryName: string): Promise<void> {
      this.loading = true;
      try {
        const response = await axios.get(
          `/api/api/json/v1/1/filter.php?c=${categoryName}`
        );
        this.meals = response.data.meals;
      } catch (error) {
        this.error = 'Error while fetching data';
      }
      this.loading = false;
    },
  },
});
