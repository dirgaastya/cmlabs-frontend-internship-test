<script setup lang="ts"></script>

<template>
  <router-link to="/">
    <div
      class="w-full flex items-end space-x-1 text-red-400 hover:text-red-500 transition ease-in duration-300"
    >
      <v-icon name="gi-hot-meal" fill="currentColor" scale="2.5" />
      <h1 class="text-red-400 text-2xl font-semibold">
        Cook<span class="text-green-500">Mate</span>
      </h1>
    </div>
  </router-link>
</template>
