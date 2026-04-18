<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CompanyDetailPage from '../../../components/company/CompanyDetailPage.vue'

const route = useRoute()
const moduleKey = computed(() => route.meta.moduleKey)
</script>

<template>
  <company-detail-page :module-key="moduleKey" />
</template>
