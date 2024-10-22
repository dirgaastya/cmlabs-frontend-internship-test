<script setup lang="ts">
import { IMealDetail } from '../../utils/type/category.type';
defineProps<{ meal: IMealDetail }>();
</script>

<template>
  <div class="space-y-3">
    <h3 class="text-xl text-gray-900 font-semibold tracking-tighter">
      Instructions:
    </h3>
    <p
      v-html="meal.strInstructions"
      class="text-sm text-gray-700 leading-relaxed text-justify"
    ></p>
    <p class="text-sm text-gray-700 leading-relaxed">
      <strong>Source:</strong> {{ meal.strSource || '-' }}
    </p>
  </div>
</template>
