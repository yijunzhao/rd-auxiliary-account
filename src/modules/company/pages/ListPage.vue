<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CompanyListPage from '../../../components/company/CompanyListPage.vue'

const route = useRoute()
const moduleKey = computed(() => route.meta.moduleKey)
</script>

<template>
  <company-list-page :module-key="moduleKey" />
</template>
