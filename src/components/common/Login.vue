<template>
  <div>
    <button v-if="!isAuthenticated" @click="login" class="w-6">
      <img src="@/assets/icons/lock.svg" alt="lock icon" />
    </button>
    <button v-else @click="handleLogout" class="w-6">
      <img src="@/assets/icons/unlock.svg" alt="unlock icon" />
    </button>

    <!-- <div v-if="isAuthenticated">
      <p>Bienvenido, {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div> -->
  </div>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

const login = () => {
  loginWithRedirect()
}

const handleLogout = () => {
  logout({ logoutParams: { returnTo: window.location.origin } })
}
</script>
