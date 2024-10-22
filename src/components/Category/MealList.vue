<script setup lang="ts">
import { IMeals } from '../../utils/type/category.type';
import Loading from '../Loading.vue';
import MealCard from './MealCard.vue';

defineProps({
  data: {
    type: Array as () => IMeals[],
    default: () => [],
  },
  category: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="py-3">
    <div class="w-fit mb-6 pb-2 pe-2 border-b-2 border-red-400">
      <h3 class="text-2xl text-gray-900 font-semibold tracking-tighter">
        {{ category }} <span class="text-red-400">Meals</span>.
      </h3>
      <p class="font-light text-base text-gray-500">
        Tasty {{ category }} Recipes for You
      </p>
    </div>
    <div v-if="loading" class="flex items-center justify-center w-full h-80">
      <Loading />
    </div>
    <transition name="fade">
      <div
        v-if="!loading"
        class="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-3 md:gap-y-6"
      >
        <MealCard
          v-for="(meal, index) in data"
          :key="index"
          :category="category"
          :meal="meal"
        />
      </div>
    </transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
