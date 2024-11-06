<template>
  <a href="#" class="hover:text-gray-600 w-6" @click="toggleLanguage">
    <img v-if="locale === 'es'" src="@/assets/icons/language-es.svg" alt="language-es icon" />
    <img v-else src="@/assets/icons/language-en.svg" alt="language-en icon" />
  </a>
</template>

<script setup>
import { useLanguageStore } from '@/store/changeLanguage'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const languageStore = useLanguageStore()

// Change language
const toggleLanguage = () => {
  const newLocale = languageStore.currentLocale === 'es' ? 'en' : 'es'
  languageStore.setLanguage(newLocale)
  locale.value = newLocale
}
</script>

<style lang="scss" scoped></style>
