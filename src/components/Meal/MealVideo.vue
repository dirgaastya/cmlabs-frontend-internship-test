<script setup lang="ts">
import { IMealDetail } from '../../utils/type/category.type';
import { getYoutubeEmbedUrl } from '../../utils/helpers';
defineProps<{ meal: IMealDetail }>();
</script>

<template>
  <div class="h-96">
    <h3 class="text-xl text-gray-900 font-semibold tracking-tighter mb-6">
      Video Tutorial:
    </h3>
    <iframe
      width="100%"
      height="100%"
      :src="getYoutubeEmbedUrl(meal.strYoutube)"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
