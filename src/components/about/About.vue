<script setup>

import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <template #main>
      <h1>ABOUT US</h1>

      <div class="border1"></div>

      <div class="information">
        <p>Welcome to the Human Anatomy Guide – your immersive and engaging resource for exploring the
          basic systems of the human body. Designed for students, educators, and curious learners, our
          interactive platform combines detailed visuals, intuitive navigation, and informative content
          to make learning anatomy accessible and enjoyable. Explore systems, organs, and structures and
          deepen your understanding with our guide. Whether you're preparing for exams or simply fascinated
          by the intricacies of the human form, our guide brings anatomy to life in a user-friendly way.</p>
      </div>

      <div class="border2"></div>

    </template>
  </primary-template>
</template>


<style scoped>

.border1 {
  max-width: 30%;
}

.border2 {
  max-width: 30%;
}

@media screen and (width > 500px) {
  .main h1 {
    text-align: center;
    padding: 30px;
    font-size: 25px;
  }

  .information p{
    text-align: center;
    padding: 30px;
    line-height: 40px;
  }

  .border1 {
    width: 250px;
    height: 3px;
    background-color: #CA0000C1;
    position: relative;
    right: -36%;

  }

  .border2 {
    width: 250px;
    height: 3px;
    background-color: #CA0000C1;
    position: relative;
    right: -36%;
  }

}
</style>