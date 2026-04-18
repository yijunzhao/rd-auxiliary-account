<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProjectDetailPage from '../../../components/project/ProjectDetailPage.vue'

const route = useRoute()
const moduleKey = computed(() => route.meta.moduleKey)
</script>

<template>
  <project-detail-page :module-key="moduleKey" />
</template>
