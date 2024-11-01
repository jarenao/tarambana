<script setup>
import { useI18n } from 'vue-i18n'
import { useCounterStore } from '../store/counter'

const { t } = useI18n()
const counter = useCounterStore()
</script>

<template>
  <div class="text-center">
    <h2 class="text-xl font-semibold mb-4">{{ t('counter.title') }}: {{ counter.count }}</h2>
    <button class="bg-green-500 text-white px-4 py-2 rounded mr-2" @click="counter.increment">
      {{ t('counter.increment') }}
    </button>
    <button class="bg-red-500 text-white px-4 py-2 rounded" @click="counter.decrement">
      {{ t('counter.decrement') }}
    </button>
  </div>
</template>
