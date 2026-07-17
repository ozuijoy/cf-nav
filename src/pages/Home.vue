<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-200">
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-20 fade-in">
        <h1 class="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          🧭 CF-NAV
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto">
          開發者導航網站 - 匯集免費開發工具、API 和資源
        </p>
        <p class="text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
          部署在 Cloudflare Pages，閃電般快速的訪問體驗
        </p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-4 mb-20 md:flex md:justify-center md:space-x-8">
        <div class="text-center slide-up" style="animation-delay: 0.1s">
          <div class="text-3xl font-bold text-primary">{{ stats.categories }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">分類</div>
        </div>
        <div class="text-center slide-up" style="animation-delay: 0.2s">
          <div class="text-3xl font-bold text-primary">{{ stats.items }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">資源</div>
        </div>
        <div class="text-center slide-up" style="animation-delay: 0.3s">
          <div class="text-3xl font-bold text-primary">100%</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">免費</div>
        </div>
      </div>
    </div>

    <!-- Categories Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div v-if="filteredItems.length > 0" class="space-y-12">
        <CategoryCard v-for="category in filteredItems" :key="category.id" :category="category" />
      </div>
      <div v-else class="text-center py-20">
        <div class="text-6xl mb-4">🔍</div>
        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">未找到結果</h3>
        <p class="text-gray-600 dark:text-gray-400">試試更改搜尋條件</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNavStore } from '../stores/navStore'
import CategoryCard from '../components/CategoryCard.vue'

const navStore = useNavStore()
const filteredItems = computed(() => navStore.filteredItems)

const stats = computed(() => ({
  categories: navStore.categories.length,
  items: navStore.categories.reduce((sum, cat) => sum + cat.items.length, 0),
}))
</script>