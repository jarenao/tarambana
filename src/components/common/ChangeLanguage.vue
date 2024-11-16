<template>
  <button class="hover:text-gray-600 md:w-6 w-full flex" @click="toggleLanguage">
    <img
      v-if="locale === 'es'"
      src="@/assets/icons/language-es.svg"
      alt="language-es icon"
      class="mr-5"
    />
    <img v-else src="@/assets/icons/language-en.svg" alt="language-en icon" class="mr-5" />
    <span class="md:hidden">{{ t('changeLanguage.title') }}</span>
    <span class="sr-only">{{ t('changeLanguage.title') }}</span>
  </button>
</template>

<script setup>
import { useLanguageStore } from '@/store/useLanguageStore'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const languageStore = useLanguageStore()

// Change language
const toggleLanguage = () => {
  const newLocale = languageStore.currentLocale === 'es' ? 'en' : 'es'
  languageStore.setLanguage(newLocale)
  locale.value = newLocale
}
</script>

<style lang="scss" scoped></style>
