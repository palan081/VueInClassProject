<script setup>
import systems from "../../data/MOCK_DATA.js";
import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
import SystemCard from "./SystemCard.vue";
</script>

<template>
  <primary-template>,
    <template #main>
      <h1>SYSTEM TYPES</h1>

      <div class="systems">
        <div v-for="(system, index) in systems.data" :key="index">
          <system-card :system="system"/>
        </div>
      </div>
    </template>
  </primary-template>
</template>

<style scoped>
.main h1 {
  text-align: center;
  padding: 30px;
  text-shadow: 1px 1px 1px red;
  font-size: 25px;
}

.systems {
  width: 50%;
  margin: 0 auto;
  display: flex;
  //flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
}
</style>
