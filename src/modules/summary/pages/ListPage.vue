<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SummaryListPage from '../../../components/summary/SummaryListPage.vue'

const route = useRoute()
const moduleKey = computed(() => route.meta.moduleKey)
</script>

<template>
  <summary-list-page :module-key="moduleKey" />
</template>
