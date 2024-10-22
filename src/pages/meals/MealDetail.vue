<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCategoryStore } from '../../stores/category.store';
import { onMounted } from 'vue';
import MealImage from '../../components/Meal/MealImage.vue';
import MealHeader from '../../components/Meal/MealHeader.vue';
import MealIngredients from '../../components/Meal/MealIngredients.vue';
import MealInstructions from '../../components/Meal/MealInstructions.vue';
import MealVideo from '../../components/Meal/MealVideo.vue';
import Loading from '../../components/Loading.vue';

const route = useRoute();
const id = route.params.id as string;
const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.fetchMealById(id);
});
</script>
<template>
  <section class="py-8 space-y-8">
    <div
      v-if="categoryStore.loading"
      class="flex items-center justify-center w-full h-[80vh]"
    >
      <Loading />
    </div>
    <transition name="fade">
      <div v-if="!categoryStore.loading" class="space-y-6">
        <div class="flex flex-col gap-y-6 md:gap-y-0 md:flew-row md:gap-x-12">
          <MealImage :meal="categoryStore.meal" />
          <div class="w-full space-y-8">
            <MealHeader :meal="categoryStore.meal" />
            <MealIngredients :meal="categoryStore.meal" />
            <MealInstructions :meal="categoryStore.meal" />
          </div>
        </div>
        <MealVideo :meal="categoryStore.meal" />
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
