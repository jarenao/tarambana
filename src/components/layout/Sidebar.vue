<script setup>
import { useMenuStore } from '@/store/useMenuStore'
import { storeToRefs } from 'pinia'

const menuStore = useMenuStore()
const { isActive } = storeToRefs(menuStore)

function closeMenu(event) {
  if (event.target.classList.contains('js-sidebar') && isActive.value) {
    isActive.value = false
  }
}
</script>

<template>
  <div
    class="js-sidebar grid min-h-screen fixed top-16 left-0 w-full backdrop-blur-sm z-10 transform duration-300 ease-in-out md:hidden"
    :class="{
      'backdrop-blur-sm bg-black/70': isActive,
      'backdrop-blur-0 bg-black/0': !isActive
    }"
    @click="isActive && closeMenu($event)"
  >
    <div
      class="bg-white shadow-lg max-w-xs ml-auto relative border-t-2 border-primary transform transition-transform duration-300 ease-in-out"
      :class="{ 'translate-x-0': menuStore.isActive, 'translate-x-full': !menuStore.isActive }"
    >
      <ul class="px-5 relative pb-5">
        <li class="flex items-center text-gray-900 text-md py-4">
          <span class="text-gray-400 mr-5"
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
              ></path></svg
          ></span>
          Dashboard
        </li>
        <li class="flex items-center text-gray-900 text-md py-4">
          <span class="text-gray-400 mr-5"
            ><svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path></svg
          ></span>
          Post sessions
        </li>
        <div class="bg-indigo-600 w-1 h-14 absolute left-0" style="bottom: 8.235rem"></div>
        <li class="flex items-center text-gray-900 text-md py-4 text-indigo-600">
          <span class="text-gray-400 mr-5"
            ><svg
              class="w-6 h-6 text-indigo-600"
              fill="#5046e5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path></svg
          ></span>
          Live sessions
        </li>
        <li class="flex items-center text-gray-900 text-md py-4">
          <span class="text-gray-400 mr-5"
            ><svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path></svg
          ></span>
          Messages
        </li>
        <li class="flex items-center text-gray-900 text-md py-4">
          <span class="text-gray-400 mr-5"
            ><svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path></svg
          ></span>
          Library
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
