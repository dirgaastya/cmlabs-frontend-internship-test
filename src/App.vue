<script setup lang="ts">
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="px-12">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>
