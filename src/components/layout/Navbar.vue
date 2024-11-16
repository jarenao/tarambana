<script setup>
import Login from '@/components/common/Login.vue'
import ChangeLanguage from '../common/ChangeLanguage.vue'
import BurguerMenu from '../common/BurguerMenu.vue'
import Aside from './Aside.vue'
import Sidebar from './Sidebar.vue'
import SocialMenu from '../common/SocialMenu.vue'
</script>

<template>
  <nav
    class="justify-between items-center h-16 fixed flex md:relative bg-white md:bg-inherit w-full top-0 left-0 px-6 shadow-sm md:shadow-none"
  >
    <!-- Logo -->
    <div class="flex items-center">
      <router-link to="/" class="text-gray-700 hover:text-yellow-500">
        <img src="/images/logo.png" alt="Landing Page" class="h-8 mr-4" />
      </router-link>
    </div>

    <!-- Main navigation -->
    <Aside />

    <!-- Icons  -->
    <nav class="hidden md:flex space-x-4 text-sm">
      <SocialMenu />

      <Login />

      <ChangeLanguage />
    </nav>

    <!-- Menu Mobile -->
    <BurguerMenu />
    <Sidebar />
  </nav>
</template>
