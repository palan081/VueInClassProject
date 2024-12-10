<script setup>
import systemsData from '../../data/MOCK_DATA.js'
import {useRoute, useRouter} from "vue-router";
import {onMounted} from "vue";

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
<pre>{{ system }}</pre>
</template>

<style scoped>

</style>