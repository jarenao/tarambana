<template>
  <header
    id="banner"
    class="bg-cover bg-center bg-no-repeat flex flex-col relative z-10"
    style="background-image: url('/images/banner-images/banner-image-1.jpg')"
  >
    <!-- Contenido del Navbar -->
    <Navbar></Navbar>
    <!-- Contenido del banner -->
    <Hero></Hero>
  </header>
</template>

<script setup>
import Navbar from './Navbar.vue'
import Hero from './Hero.vue'
</script>

<style lang="scss" scoped></style>
