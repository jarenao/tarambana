<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <header class="bg-blue-500 text-white p-4">
    <h1 class="text-2xl font-bold">{{ t('home.title') }}</h1>
    <nav class="mt-2">
      <router-link to="/" class="mr-4">{{ t('home.title') }}</router-link>
      <router-link to="/about" class="mr-4">{{ t('about.title') }}</router-link>
      <router-link to="/prueba" class="mr-4">{{ t('prueba.title') }}</router-link>
    </nav>
  </header>
</template>
