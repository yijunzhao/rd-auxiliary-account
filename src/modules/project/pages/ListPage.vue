<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProjectListPage from '../../../components/project/ProjectListPage.vue'

const route = useRoute()
const moduleKey = computed(() => route.meta.moduleKey)
</script>

<template>
  <project-list-page :module-key="moduleKey" />
</template>
