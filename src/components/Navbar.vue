<script setup lang="ts">
import { NAVIGATION_LINKS } from '../utils/constants/navbar.constant';
import LogoApp from './LogoApp.vue';
</script>
<template>
  <nav class="flex items-center justify-between py-6">
    <LogoApp />

    <ul class="flex items-center space-x-6">
      <li v-for="(link, index) in NAVIGATION_LINKS" :key="index">
        <router-link
          :to="link.to"
          class="text-base text-gray-900 hover:text-red-400 transition ease-in duration-300"
          >{{ link.name }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>
