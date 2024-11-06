<template>
  <div
    class="tham tham-e-squeeze tham-w-6 md:hidden"
    :class="{ 'tham-active': isActive }"
    @click="toggleMenu()"
  >
    <div class="tham-box">
      <div class="tham-inner" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isActive = ref(false)

function toggleMenu() {
  isActive.value = !isActive.value
}
</script>

<style lang="scss" scoped></style>
