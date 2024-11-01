import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLocale: 'es'
  }),
  actions: {
    toggleLanguage() {
      const { locale } = useI18n()
      this.currentLocale = this.currentLocale === 'es' ? 'en' : 'es'
      locale.value = this.currentLocale
    }
  }
})
