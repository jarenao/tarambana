<template>
  <div
    class="tham tham-e-squeeze tham-w-6 md:hidden"
    :class="{ 'tham-active': isActive }"
    @click="toggleActive()"
  >
    <div class="tham-box">
      <div class="tham-inner" />
    </div>
  </div>
</template>

<script setup>
import { useMenuStore } from '@/store/useMenuStore'
import { storeToRefs } from 'pinia'

const menuStore = useMenuStore()
const { isActive } = storeToRefs(menuStore) // mantiene la reactividad de `isActive`
const { toggleActive } = menuStore // esto es una función, no necesita `storeToRefs`
</script>

<style lang="scss" scoped></style>
