<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MaterialListPage from '../../../components/material/MaterialListPage.vue'

const route = useRoute()
const moduleKey = computed(() => route.meta.moduleKey)
</script>

<template>
  <material-list-page :module-key="moduleKey" />
</template>
