<script setup lang="ts">
import { IMealDetail } from '../../utils/type/category.type';
defineProps<{ meal: IMealDetail }>();
</script>

<template>
  <img
    :src="meal.strMealThumb"
    :alt="meal.strMeal"
    class="md:w-1/3 object-center object-cover rounded-lg shadow"
  />
</template>
