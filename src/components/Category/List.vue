<script setup lang="ts">
import { ICategory } from '../../utils/type/category.type';
import Loading from '../Loading.vue';
import CategoryCard from './Card.vue';

defineProps({
  data: {
    type: Array as () => ICategory[],
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
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
    <div v-if="loading" class="flex items-center justify-center w-full h-80">
      <Loading />
    </div>
    <transition name="fade">
      <div v-if="!loading" class="grid grid-cols-4 gap-x-8 gap-y-6">
        <CategoryCard
          v-for="(category, index) in data"
          :key="index"
          :category="category"
        />
      </div>
    </transition>
  </section>
</template>

<style scoped>
/* Define fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
