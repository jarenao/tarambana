import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLocale: 'es'
  }),
  actions: {
    setLanguage(newLocale) {
      this.currentLocale = newLocale
    }
  }
})
