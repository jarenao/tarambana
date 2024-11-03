<script setup>
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/store/changeLanguage'
import { useRoute } from 'vue-router'

const { t, locale } = useI18n()
const languageStore = useLanguageStore()

const route = useRoute()
const isActive = (path) => route.path === path

// Función para cambiar el idioma
const toggleLanguage = () => {
  const newLocale = languageStore.currentLocale === 'es' ? 'en' : 'es'
  languageStore.setLanguage(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <nav id="navbar" class="flex justify-between items-center h-16">
    <div id="logo" class="flex items-center">
      <!-- Logo en el banner -->
      <router-link to="/" class="text-gray-700 hover:text-yellow-500">
        <img src="/images/logo.png" alt="Landing Page" class="h-8 mr-4" />
      </router-link>
      <!-- Logo en la barra de navegación -->
      <!-- <img src="/images/logo-2.png" alt="Landing Page" class="hidden md:inline-block h-8" /> -->
    </div>

    <aside>
      <ul class="flex space-x-4 text-gray-500">
        <li>
          <router-link
            to="/about"
            :class="isActive('/about') ? 'text-secondary' : 'text-primary-light'"
            class="hover:text-secondary"
            >{{ t('about.title') }}</router-link
          >
        </li>
        <li>
          <router-link
            to="/gallery"
            :class="isActive('/gallery') ? 'text-secondary' : 'text-primary-light'"
            class="hover:text-secondary"
            >{{ t('gallery.title') }}</router-link
          >
        </li>
      </ul>
    </aside>

    <!-- Navegación principal -->
    <nav id="nav-main" class="hidden md:flex space-x-4 text-sm">
      <a href="#" class="hover:text-gray-600">
        <img src="@/assets/icons/facebook.svg" alt="Facebook icon" />
      </a>
      <a href="#" class="hover:text-gray-600">
        <img src="@/assets/icons/instagram.svg" alt="Instagram icon" />
      </a>
      <a href="#" class="hover:text-gray-600">
        <img src="@/assets/icons/lock.svg" alt="lock icon" />
      </a>
      <a href="#" class="hover:text-gray-600">
        <img src="@/assets/icons/unlock.svg" alt="unlock icon" />
      </a>
      <a href="#" class="hover:text-gray-600 w-6" @click="toggleLanguage">
        <img v-if="locale === 'es'" src="@/assets/icons/language-es.svg" alt="language-es icon" />
        <img v-else src="@/assets/icons/language-en.svg" alt="language-en icon" />
      </a>

      <!-- Otros enlaces del menú -->
    </nav>

    <div id="nav-trigger" class="md:hidden">
      <!-- Icono de hamburguesa o botón para menú móvil -->
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
