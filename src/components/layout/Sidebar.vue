<script setup>
import SocialMenu from '../common/SocialMenu.vue'
import Login from '../common/Login.vue'
import ChangeLanguage from '../common/ChangeLanguage.vue'

import { useMenuStore } from '@/store/useMenuStore'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useAuth0 } from '@auth0/auth0-vue'
import { ref, watch } from 'vue'
import { routes } from '@/router'

const { t } = useI18n()
const { isAuthenticated } = useAuth0()
const route = useRoute()

const menuStore = useMenuStore()
const { isActive } = storeToRefs(menuStore)

// Función para verificar si la ruta está activa
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

function closeMenu(event) {
  if (event.target.classList.contains('js-sidebar') && isActive.value) {
    isActive.value = false
  }
}

function closePanel() {
  isActive.value = false
}
</script>

<template>
  <div
    class="js-sidebar grid min-h-screen fixed top-16 left-0 w-full z-10 transform duration-300 ease-in-out md:hidden"
    :class="{
      'backdrop-blur-sm bg-black/70': isActive,
      'backdrop-blur-0 bg-black/0': !isActive
    }"
    @click="isActive && closeMenu($event)"
  >
    <div
      class="bg-white shadow-lg max-w-xs ml-auto relative border-t-2 border-primary transform duration-300 ease-in-out"
      :class="{ 'translate-x-0': isActive, 'translate-x-full': !isActive }"
    >
      <ul class="px-5 relative pb-5">
        <template v-for="(route, index) in menuRoutes" :key="index">
          <li
            v-if="route.showInMenu"
            :class="isPathActive(route.path) ? 'text-secondary' : 'text-primary'"
            class="flex items-center text-md py-4"
          >
            <router-link :to="route.path" class="flex items-center" @click="closePanel()">
              <div
                v-if="isPathActive(route.path)"
                class="bg-secondary w-1 h-14 absolute left-0"
              ></div>

              <span
                class="mr-5"
                :class="isPathActive(route.path) ? 'text-secondary' : 'text-primary'"
                ><svg
                  class="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                  ></path>
                </svg>
              </span>
              {{ t(`${route.name}.title`) }}
            </router-link>
          </li>
        </template>
        <li class="flex items-center py-4">
          <ChangeLanguage />
        </li>
        <li class="flex items-center py-4">
          <Login />
        </li>
        <li class="flex justify-between items-center pt-10">
          <SocialMenu />
        </li>
      </ul>
    </div>
  </div>
</template>
