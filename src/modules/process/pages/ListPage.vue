<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProcessListPage from '../../../components/process/ProcessListPage.vue'

const route = useRoute()
const moduleKey = computed(() => route.meta.moduleKey)
</script>

<template>
  <process-list-page :module-key="moduleKey" />
</template>
