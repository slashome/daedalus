<template>
  <div>
    <nav class="nav">
      <NuxtLink to="/">Deadalus</NuxtLink>
      <div class="lang-switcher">
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          @click="setLocale(locale.code)"
          :class="{ active: locale.code === currentLocale }"
        >
          {{ locale.code.toUpperCase() }}
        </button>
      </div>
    </nav>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
const { locale: currentLocale, locales, setLocale } = useI18n()
const availableLocales = computed(() => locales.value)
</script>

<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: sans-serif; background: #f5f5f5; color: #333; }
.nav { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background: #2563eb; color: white; }
.nav a { color: white; text-decoration: none; font-weight: bold; font-size: 1.2rem; }
.lang-switcher { display: flex; gap: 0.5rem; }
.lang-switcher button { background: transparent; border: 1px solid rgba(255,255,255,0.5); color: white; padding: 0.25rem 0.5rem; border-radius: 4px; cursor: pointer; font-size: 0.75rem; }
.lang-switcher button.active { background: rgba(255,255,255,0.2); border-color: white; }
main { max-width: 800px; margin: 2rem auto; padding: 0 1rem; }
</style>
