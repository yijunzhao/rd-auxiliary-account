<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SummaryDetailPage from '../../../components/summary/SummaryDetailPage.vue'

const route = useRoute()
const moduleKey = computed(() => route.meta.moduleKey)
</script>

<template>
  <summary-detail-page :module-key="moduleKey" />
</template>
