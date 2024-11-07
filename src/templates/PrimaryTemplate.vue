<script setup>

</script>

<template>
  <section class="primary-template">
    <nav>
      <a href="#">home</a>
      <a href="#">systems</a>
      <a href="#">about</a>
      <a href="#">medical devices</a>
    </nav>
    <section class="main">
      <slot></slot>
    </section>
  </section>
</template>

<style scoped>


section.primary-template {
  max-width: 900px;
  margin: 0 auto;
  border: 10px solid black;

  nav {
    text-align: right;
    border: 1px solid black;
    margin: 1rem;

    a {
      margin: 0 10px;
      color: black;
      padding: 10px;
      text-decoration: none;
      border-radius: 5px;

      &:hover {
        background-color: white;
      }
    }
  }

  header {
    background-color: #5a5a5a;
    color: white;
  }

}

</style>