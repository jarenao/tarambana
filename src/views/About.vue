<script setup>
import { useI18n } from 'vue-i18n'
import Header from '../components/Header.vue'

const { t } = useI18n()
</script>

<template>
  <div>
    <Header />
    <main class="container mx-auto mt-8">
      <h1 class="text-3xl font-bold mb-4">{{ t('about.title') }}</h1>
      <p class="text-lg">{{ t('about.description') }}</p>
    </main>
  </div>
</template>