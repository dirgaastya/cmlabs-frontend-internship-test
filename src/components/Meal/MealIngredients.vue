<script setup lang="ts">
import { IMealDetail } from '../../utils/type/category.type';
defineProps<{ meal: IMealDetail }>();
</script>

<template>
  <div class="space-y-3">
    <h3 class="text-xl text-gray-900 font-semibold tracking-tighter">
      Ingredients:
    </h3>
    <div class="grid grid-cols-2 gap-x-12">
      <div
        v-for="index in 20"
        :key="index"
        class="flex items-center justify-between"
      >
        <p class="text-sm text-gray-700 leading-relaxed text-justify">
          {{ (meal as any)[`strIngredient${index}`]  }}
        </p>
        <p
          class="text-sm font-semibold text-gray-700 leading-relaxed text-justify"
        >
          {{ (meal as any)[`strMeasure${index}`]  }}
        </p>
      </div>
    </div>
  </div>
</template>
