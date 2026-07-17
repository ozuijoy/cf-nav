<template>
  <div class="mb-12">
    <div class="flex items-center space-x-3 mb-6">
      <span class="text-4xl">{{ category.icon }}</span>
      <h2 class="text-3xl font-bold text-slate-900 dark:text-white">{{ category.name }}</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <NavItem v-for="item in category.items" :key="item.name" :item="item" />
    </div>
  </div>
</template>

<script setup>
import NavItem from './NavItem.vue'

defineProps({
  category: {
    type: Object,
    required: true,
  },
})
</script>