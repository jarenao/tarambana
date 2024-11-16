<template>
  <template v-for="link in socialLinks" :key="link.name">
    <button @click.prevent="openSocialLink(link)" class="" :title="`Abrir ${link.name}`">
      <img :src="`/src/assets/icons/${link.icon}.svg`" :alt="`Link ${link.name}`" />
      <span class="sr-only">{{ link.name }}</span>
    </button>
  </template>
</template>

<script setup>
import socialLinks from '@/config/socialLinks.js'

function openSocialLink(link) {
  if (link.appUrl) {
    window.location.href = link.appUrl

    setTimeout(() => {
      window.location.href = link.url
    }, 500)
  } else {
    // Si no hay appUrl, usa directamente la URL estándar
    window.location.href = link.url
  }
}
</script>

<style lang="scss" scoped></style>
