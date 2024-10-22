<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCategoryStore } from '../../stores/category.store';
import { onMounted } from 'vue';
import MealImage from '../../components/Meal/MealImage.vue';
import MealHeader from '../../components/Meal/MealHeader.vue';
import MealIngredients from '../../components/Meal/MealIngredients.vue';
import MealInstructions from '../../components/Meal/MealInstructions.vue';
import MealVideo from '../../components/Meal/MealVideo.vue';

const route = useRoute();
const id = route.params.id as string;
const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.fetchMealById(id);
});
</script>
<template>
  <section class="py-8 space-y-8">
    <div class="flex gap-x-12">
      <MealImage :meal="categoryStore.meal" />
      <div class="w-full space-y-8">
        <MealHeader :meal="categoryStore.meal" />
        <MealIngredients :meal="categoryStore.meal" />
        <MealInstructions :meal="categoryStore.meal" />
      </div>
    </div>
    <MealVideo :meal="categoryStore.meal" />
  </section>
</template>
