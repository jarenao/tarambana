<template>
  <aside class="hidden md:flex">
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
      <li v-if="isAuthenticated">
        <router-link
          to="/private"
          :class="isActive('/private') ? 'text-secondary' : 'text-primary-light'"
          class="hover:text-secondary"
          >{{ t('private.title') }}</router-link
        >
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useAuth0 } from '@auth0/auth0-vue'

const { t } = useI18n()
const { isAuthenticated } = useAuth0()

const route = useRoute()
const isActive = (path) => route.path === path
</script>

<style lang="scss" scoped></style>
