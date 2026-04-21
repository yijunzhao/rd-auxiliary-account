<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CompanyCreatePage from '../../../components/company/CompanyCreatePage.vue'

const route = useRoute()
const moduleKey = computed(() => route.meta.moduleKey)
</script>

<template>
  <company-create-page :module-key="moduleKey" />
</template>
