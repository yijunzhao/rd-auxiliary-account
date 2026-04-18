<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ExpenseListPage from '../../../components/expense/ExpenseListPage.vue'

const route = useRoute()
const moduleKey = computed(() => route.meta.moduleKey)
</script>

<template>
  <expense-list-page :module-key="moduleKey" />
</template>
