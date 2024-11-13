<script setup>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <Navbar></Navbar>
  <div>
    <h1>ESTO ES UNA AREA PRIVADA</h1>
  </div>
  <Footer></Footer>
</template>
