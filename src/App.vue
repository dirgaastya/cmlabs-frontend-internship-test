<script setup lang="ts">
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import Breadcrumbs from './components/Breadcrumbs.vue';
</script>

<template>
  <div class="px-4 md:px-12">
    <Navbar />
    <Breadcrumbs />
    <router-view></router-view>
    <Footer />
  </div>
</template>
