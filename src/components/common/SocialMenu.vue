<template>
  <template v-for="link in socialLinks" :key="link.name">
    <a
      href="#"
      @click.prevent="openSocialLink(link)"
      :title="`Abrir ${link.name}`"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img :src="`/src/assets/icons/${link.icon}.svg`" :alt="`Link ${link.name}`" />
      <span class="sr-only">{{ link.name }}</span>
    </a>
  </template>
</template>

<script setup>
import socialLinks from '@/config/socialLinks.js'

function openSocialLink(link) {
  if (link.appUrl) {
    window.location.href = link.appUrl

    setTimeout(() => {
      window.open(link.url, '_blank')
    }, 500)
  } else {
    window.open(link.url, '_blank')
  }
}
</script>
