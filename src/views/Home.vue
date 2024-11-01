<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '../store/changeLanguage'

import Header from '../components/Header.vue'
import Counter from '../components/Counter.vue'

const { t, locale } = useI18n()
const languageStore = useLanguageStore()

const toggleLanguage = () => {
  languageStore.toggleLanguage()
}

// Sincroniza el idioma del store con vue-i18n
watch(
  () => languageStore.currentLocale,
  (newLocale) => {
    locale.value = newLocale
  }
)
</script>

<template>
  <div>
    <Header />
    <main class="container mx-auto mt-8">
      <h1 class="text-3xl font-bold mb-4">{{ t('home.title') }}</h1>
      <button @click="toggleLanguage" class="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        {{ t('home.changeLanguage') }}
      </button>
      <Counter />
    </main>
  </div>
</template>
