<script setup lang="ts">
import { IMealDetail } from '../../utils/type/category.type';
defineProps<{ meal: IMealDetail }>();
</script>

<template>
  <div class="border-b border-red-400 pb-3">
    <div class="flex items-center justify-between">
      <h3 class="text-2xl text-gray-900 font-semibold tracking-tighter">
        {{ meal.strMeal }}
      </h3>
      <router-link
        :to="`/${meal.strCategory}`"
        class="py-1 px-6 rounded-full bg-red-400 text-white"
      >
        {{ meal.strCategory }}
      </router-link>
    </div>
    <p class="text-gray-500">{{ meal.strArea }}</p>
  </div>
</template>
