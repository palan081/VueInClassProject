<script setup>

</script>

<template>
  <section class="card">
    <slot/>
  </section>
</template>

<style scoped>
section.card {
  text-align: center;
  padding: 1rem;
  background-color: white;
  box-shadow: 12px 12px 2px 1px rgba(202, 0, 0, 0.76);
}
</style>