<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ExpenseDetailPage from '../../../components/expense/ExpenseDetailPage.vue'

const route = useRoute()
const moduleKey = computed(() => route.meta.moduleKey)
</script>

<template>
  <expense-detail-page :module-key="moduleKey" />
</template>
