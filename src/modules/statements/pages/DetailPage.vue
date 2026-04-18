<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import StatementsDetailPage from '../../../components/statements/StatementsDetailPage.vue'

const route = useRoute()
const moduleKey = computed(() => route.meta.moduleKey)
</script>

<template>
  <statements-detail-page :module-key="moduleKey" />
</template>
