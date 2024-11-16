<template>
  <aside class="hidden md:flex">
    <ul class="flex space-x-4 text-gray-500">
      <template v-for="(route, index) in menuRoutes" :key="index">
        <li v-if="route.showInMenu">
          <router-link
            :to="route.path"
            :class="isPathActive(route.path) ? 'text-secondary' : 'text-primary-light'"
            class="hover:text-secondary"
          >
            {{ t(`${route.name}.title`) }}
          </router-link>
        </li>
      </template>
    </ul>
  </aside>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useAuth0 } from '@auth0/auth0-vue'
import { ref, watch } from 'vue'
import { routes } from '@/router'

const { t } = useI18n()
const { isAuthenticated } = useAuth0()
const route = useRoute()

const isPathActive = (path) => route.path === path

const menuRoutes = ref([])

// Filtrar las rutas por autenticación y visibilidad
const filterMenuRoutes = () => {
  menuRoutes.value = routes.filter((route) => {
    return route.showInMenu && (!route.meta.requiresAuth || isAuthenticated.value)
  })
}

// Ejecutamos el filtro inicial
filterMenuRoutes()

// Reejecutamos el filtro cuando cambie el estado de autenticación
watch(isAuthenticated, () => {
  filterMenuRoutes()
})
</script>
