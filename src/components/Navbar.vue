<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-800 shadow-md transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 text-xl font-bold text-primary hover:text-primary-dark transition-colors">
          <span class="text-2xl">🧭</span>
          <span>CF-NAV</span>
        </router-link>

        <!-- Search Bar -->
        <div class="flex-1 max-w-xl mx-8">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="搜尋工具、API..."
              class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-700 border border-transparent dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <span class="absolute right-3 top-2.5 text-gray-400">🔍</span>
          </div>
        </div>

        <!-- Theme Toggle -->
        <button
          @click="$emit('toggle-theme')"
          class="ml-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
          :title="isDark ? '切換淺色主題' : '切換深色主題'"
        >
          <span class="text-xl">{{ isDark ? '☀️' : '🌙' }}</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useNavStore } from '../stores/navStore'

defineProps({
  isDark: Boolean,
})

defineEmits(['toggle-theme'])

const navStore = useNavStore()
const searchQuery = ref(navStore.searchQuery)

watch(searchQuery, (newQuery) => {
  navStore.setSearchQuery(newQuery)
})
</script>