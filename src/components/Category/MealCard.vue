<script setup lang="ts">
import { IMeals } from '../../utils/type/category.type';

interface CardProps {
  meal: IMeals;
  category: string;
}

defineProps<CardProps>();
</script>
<template>
  <router-link
    :to="`/${category}/${meal.idMeal}`"
    class="rounded-3xl h-32 overflow-hidden bg-white bg-no-repeat bg-center bg-cover group hover:-translate-y-2 transition-all ease-in duration-200"
    :style="`background-image: url('${meal.strMealThumb}');`"
  >
    <div class="bg-black/40 h-full py-6 px-6 flex items-center justify-center">
      <h4
        class="font-semibold text-white group-hover:text-red-400 group-hover:scale-105 transition-all ease-in duration-200"
      >
        {{ meal.strMeal }}
      </h4>
    </div>
  </router-link>
</template>

\
