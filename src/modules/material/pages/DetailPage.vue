<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MaterialDetailPage from '../../../components/material/MaterialDetailPage.vue'

const route = useRoute()
const moduleKey = computed(() => route.meta.moduleKey)
</script>

<template>
  <material-detail-page :module-key="moduleKey" />
</template>
