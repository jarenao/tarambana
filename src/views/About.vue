<script setup>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <Navbar></Navbar>
  <Footer></Footer>
</template>
