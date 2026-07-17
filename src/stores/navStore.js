import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import navData from '../data/nav-items.json'

export const useNavStore = defineStore('nav', () => {
  const categories = ref(navData.categories || [])
  const searchQuery = ref('')

  const filteredItems = computed(() => {
    if (!searchQuery.value) {
      return categories.value
    }

    const query = searchQuery.value.toLowerCase()
    return categories.value
      .map(category => ({
        ...category,
        items: category.items.filter(
          item =>
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.tags?.some(tag => tag.toLowerCase().includes(query))
        ),
      }))
      .filter(category => category.items.length > 0)
  })

  const setSearchQuery = (query) => {
    searchQuery.value = query
  }

  return {
    categories,
    searchQuery,
    filteredItems,
    setSearchQuery,
  }
})