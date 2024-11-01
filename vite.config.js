import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    // Configuración de Vitest
    globals: true,
    environment: 'jsdom',
  },
})