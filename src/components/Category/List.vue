<script setup lang="ts">
import { ICategory } from '../../utils/type/category.type';
defineProps({
  data: {
    type: Array as () => ICategory[],
    default: () => [],
  },
});
</script>

<template>
  <section class="py-8">
    <div class="w-fit mb-6 pb-2 pe-2 border-b-2 border-red-400">
      <h3 class="text-2xl text-gray-900 font-semibold tracking-tighter">
        What's Cooking?
      </h3>
    </div>
    <div class="grid grid-cols-4 gap-x-8 gap-y-6">
      <router-link
        :to="`/category/${category.idCategories}`"
        v-for="(category, index) in data"
        :key="index"
        class="rounded-3xl h-32 overflow-hidden bg-white bg-no-repeat bg-center bg-cover group hover:-translate-y-2 transition-all ease-in duration-200"
        :style="`background-image: url('${category.strCategoryThumb}');`"
      >
        <div
          class="bg-black/40 h-full py-6 px-6 flex items-center justify-center"
        >
          <h4
            class="font-semibold text-white group-hover:text-red-400 group-hover:scale-105 transition-all ease-in duration-200"
          >
            {{ category.strCategory }}
          </h4>
        </div>
      </router-link>
    </div>
  </section>
</template>
