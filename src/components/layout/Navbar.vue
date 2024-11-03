<script setup>
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/store/changeLanguage'

const { t, locale } = useI18n()
const languageStore = useLanguageStore()

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
      <img src="/images/logo.png" alt="Landing Page" class="h-8 mr-4" />
      <!-- Logo en la barra de navegación -->
      <!-- <img src="/images/logo-2.png" alt="Landing Page" class="hidden md:inline-block h-8" /> -->
    </div>

    <aside>
      <ul class="flex space-x-4 text-gray-500">
        <li>
          <router-link to="/" class="text-gray-700 hover:text-yellow-500">{{
            t('home.title')
          }}</router-link>
        </li>
        <li>
          <router-link to="/about" class="text-gray-700 hover:text-yellow-500">{{
            t('about.title')
          }}</router-link>
        </li>
        <li>
          <router-link to="/gallery" class="text-gray-700 hover:text-yellow-500">{{
            t('gallery.title')
          }}</router-link>
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
        <img src="@/assets/icons/lock.svg" alt="lock  icon" />
      </a>
      <a href="#" class="hover:text-gray-600">
        <img src="@/assets/icons/unlock.svg" alt="unlock icon" />
      </a>
      <a href="#" class="hover:text-gray-600" @click="toggleLanguage">
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
