<script setup>

</script>

<template>
  <section class="primary-template">
    <nav>
      <router-link :to="{ name: 'Home'}">home</router-link>
      <router-link :to="{ name: 'About'}">about</router-link>
      <router-link :to="{ name: 'Systems'}">systems</router-link>
      <router-link :to="{ name: 'MedicalDevices'}">medical devices</router-link>
      <router-link :to="{ name: 'ContactUs'}">contact us</router-link>
    </nav>
    <section class="main">
      <slot name="main"/>
      <slot name="secondary"/>
    </section>
  </section>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

section.primary-template {
  max-width: 900px;
  margin: 0 auto;
  border: 10px solid black;
  font-family: 'Roboto Mono', sans-serif;
  }

  nav {
    text-align: right;
    border: 1px solid black;
    margin: 1rem;
    font-weight: bold;

    a {
      margin: 0 10px;
      color: black;
      padding: 10px;
      text-decoration: none;
      border-radius: 5px;
      font-size: 0.9rem;

      &.router-link-active {
        background-color: white;
        border-color: white;
      }

      &:hover {
        background-color: white;
      }
    }
  }

  header {
    background-color: #5a5a5a;
    color: white;
  }


</style>