<script setup>
defineProps({
  system: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="system-card">
    <h3 v-text="system.system_name"></h3>
    <p>{{ system.system_description }}</p>
  </section>
</template>

<style scoped>
.system-card {
  padding: 1rem;

  &:hover {
    background-color: white;
    border-radius: 10px;
  }
}
</style>


