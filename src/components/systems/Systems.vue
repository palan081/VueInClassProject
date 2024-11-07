<script setup>
import systems from "../../data/MOCK_DATA.js";
import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
import SystemCard from "./SystemCard.vue";
</script>

<template>
  <primary-template>
    <h1>System Types</h1>

    <div class="systems">
      <div v-for="(system, index) in systems.data" :key="index">
        <system-card :system="system"/>
      </div>
    </div>

  </primary-template>
</template>

<style scoped>
.systems {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>