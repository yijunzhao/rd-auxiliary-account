<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MaterialCreatePage from '../../../components/material/MaterialCreatePage.vue'

const route = useRoute()
const moduleKey = computed(() => route.meta.moduleKey)
</script>

<template>
  <material-create-page :module-key="moduleKey" />
</template>
