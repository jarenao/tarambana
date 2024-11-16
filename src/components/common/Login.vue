<template>
  <button v-if="!isAuthenticated" @click="login" class="flex w-full md:w-6">
    <img src="@/assets/icons/lock.svg" alt="lock icon" class="mr-5" />
    <span class="md:hidden">{{ t('login.title') }}</span>
    <span class="sr-only">{{ t('login.title') }}</span>
  </button>
  <button v-else @click="handleLogout" class="flex">
    <img src="@/assets/icons/unlock.svg" alt="unlock icon" class="mr-5 md:mr-0" />
    <span class="md:hidden">{{ t('logout.title') }}</span>
    <span class="sr-only">{{ t('logout.title') }}</span>
  </button>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

const login = () => {
  loginWithRedirect()
}

const handleLogout = () => {
  logout({ logoutParams: { returnTo: window.location.origin } })
}
</script>
