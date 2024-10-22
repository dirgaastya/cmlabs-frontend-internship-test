<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCategoryStore } from '../../stores/category.store';
import { onMounted } from 'vue';
import MealList from '../../components/Category/MealList.vue';

const route = useRoute();
const categoryName = route.params.categoryName as string;
const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.fetchCategoryByName(categoryName);
});
</script>

<template>
  <MealList
    :category="categoryName"
    :loading="categoryStore.loading"
    :data="categoryStore.meals"
  />
</template>
