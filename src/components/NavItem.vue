<template>
  <a
    :href="item.url"
    target="_blank"
    rel="noopener noreferrer"
    class="group block p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-primary hover:shadow-lg dark:hover:shadow-primary/20 bg-white dark:bg-slate-800 transition-all duration-200 transform hover:-translate-y-1"
  >
    <div class="flex items-start justify-between mb-2">
      <h3 class="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{{ item.name }}</h3>
      <span class="text-lg group-hover:scale-110 transition-transform">🔗</span>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{{ item.description }}</p>
    <div v-if="item.tags && item.tags.length" class="flex flex-wrap gap-1">
      <span
        v-for="tag in item.tags"
        :key="tag"
        class="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300"
      >
        {{ tag }}
      </span>
    </div>
  </a>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>