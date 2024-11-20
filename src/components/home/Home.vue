<script setup>

import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <template #main>
      <h1>HUMAN ANATOMY INTERACTIVE GUIDE</h1>

      <div class="image">
        <img src="./skeletonhomepage.svg" alt="Skeleton Homepage"/>
      </div>

    </template>
  </primary-template>
</template>


<style scoped>
.main h1 {
  text-align: center;
  padding-top: 50px;
  font-size: 25px;
  text-shadow: 1px 1px 1px red;
}

.image {
  display: flex;
  justify-content: center;
  align-content: center;
}



</style>