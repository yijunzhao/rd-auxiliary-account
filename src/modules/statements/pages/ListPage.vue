<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import StatementsListPage from '../../../components/statements/StatementsListPage.vue'

const route = useRoute()
const moduleKey = computed(() => route.meta.moduleKey)
</script>

<template>
  <statements-list-page :module-key="moduleKey" />
</template>
