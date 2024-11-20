<script setup>
import ShadowedCard from "../generic/ShadowedCard.vue";

defineProps({
  system: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <shadowed-card>
    <section class="system-card">
      <h3 v-text="system.system_name"></h3>
      <p>{{ system.system_description }}</p>
    </section>
  </shadowed-card>
</template>

<style scoped>

</style>


