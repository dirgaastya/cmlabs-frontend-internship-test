<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useCategoryStore } from '../stores/category.store';

const route = useRoute();
const categoryStore = useCategoryStore();

const categoryName = computed(() => route.params.categoryName as string);

const id = computed(() => route.params.id as string);
const mealName = computed(() => (id.value ? categoryStore.meal.strMeal : ''));

if (id.value) {
  categoryStore.fetchMealById(id.value);
}
</script>

<template>
  <nav v-if="categoryName || id" class="flex py-3">
    <router-link
      to="/"
      class="text-gray-600 hover:text-red-500"
      v-if="categoryName || id"
    >
      <v-icon name="fa-home" />
      Home
    </router-link>
    <span v-if="categoryName || id" class="mx-2 text-gray-500">/</span>
    <router-link
      v-if="categoryName && !id"
      :to="`/${categoryName}`"
      class="text-red-400"
    >
      {{ categoryName }}
    </router-link>
    <router-link
      v-if="id"
      :to="`/${categoryName}`"
      class="text-gray-600 hover:text-red-500"
    >
      {{ categoryName }}
    </router-link>
    <span v-if="id" class="mx-2 text-gray-500">/</span>
    <span v-if="id" class="text-red-400">{{ mealName }}</span>
  </nav>
</template>

<style scoped>
nav {
  font-size: 0.875rem;
}
</style>
