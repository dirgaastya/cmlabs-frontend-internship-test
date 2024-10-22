<script setup lang="ts">
import { ICategory } from '../../utils/type/category.type';

interface CardProps {
  category: ICategory;
}

defineProps<CardProps>();
</script>
<template>
  <router-link
    :to="`/category/${category.idCategories}`"
    class="rounded-3xl h-32 overflow-hidden bg-white bg-no-repeat bg-center bg-cover group hover:-translate-y-2 transition-all ease-in duration-200"
    :style="`background-image: url('${category.strCategoryThumb}');`"
  >
    <div class="bg-black/40 h-full py-6 px-6 flex items-center justify-center">
      <h4
        class="font-semibold text-white group-hover:text-red-400 group-hover:scale-105 transition-all ease-in duration-200"
      >
        {{ category.strCategory }}
      </h4>
    </div>
  </router-link>
</template>

\
