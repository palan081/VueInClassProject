<script setup>
import systemsData from '../../data/MOCK_DATA.js'
import {useRoute, useRouter} from "vue-router";
import {onMounted} from "vue";
import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";

const route = useRoute()
const router = useRouter()
const systemId = route.params.systemId
const system = systemsData.data.filter(system => system.id === systemId)[0]


onMounted(() => {
  if (!system) {
    router.push({
      name: 'Home'
    })
  }
})
</script>

<template>
  <primary-template>
    <template #main>

<!--      <pre>{{ system }}</pre>-->

      <h1>{{ system.system_name }}</h1>

      <img :src="system.image"/>

      <p>{{ system.system_description }}</p>

    </template>
  </primary-template>
</template>

<style scoped>

img {
  max-width: 50%;

}

</style>

