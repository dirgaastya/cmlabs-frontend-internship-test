<script setup lang="ts">
import { onMounted } from 'vue';
import Hero from '../../components/Category/Hero.vue';
import { useCategoryStore } from '../../stores/category.store';
import List from '../../components/Category/List.vue';

const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.fetchAllCategories();
});
</script>

<template>
  <Hero />
  <List :data="categoryStore.categories" />
</template>
