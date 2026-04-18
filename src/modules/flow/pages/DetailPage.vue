<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProcessDetailPage from '../../../components/process/ProcessDetailPage.vue'

const route = useRoute()
const moduleKey = computed(() => route.meta.moduleKey)
</script>

<template>
  <process-detail-page :module-key="moduleKey" />
</template>
