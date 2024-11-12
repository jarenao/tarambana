import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    isActive: false
  }),
  actions: {
    toggleActive() {
      this.isActive = !this.isActive
    }
  }
})
