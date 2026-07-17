<template>
  <div :class="isDark ? 'dark' : ''" class="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
    <Navbar @toggle-theme="toggleTheme" :isDark="isDark" />
    <main class="pt-20">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>