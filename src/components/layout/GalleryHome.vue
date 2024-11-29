<script setup>
import { ref, onMounted } from 'vue'
import CldImage from '../common/CldImage.vue'

const photos = ref([])
const loading = ref(true)

const getData = async (tag) => {
  const response = await fetch(
    `https://res.cloudinary.com/${import.meta.env.VITE_CLOUD_NAME}/image/list/${tag}.json`
  )
  const data = await response.json()
  photos.value = data.resources
  loading.value = false
}

onMounted(() => {
  getData('cat')
})
</script>

<template>
  <div class="m-2 space-y-4">
    <template v-if="loading">
      <p class="font-bold">Loading gallery</p>
    </template>

    <template v-else-if="photos.length !== 0">
      <aside
        id="gallery"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-20"
      >
        <a v-for="(photo, idx) in photos" :key="idx" :href="_Test" class="relative group">
          <CldImage :publicId="photo.public_id" class="w-full h-auto" />
          <div
            class="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"
          ></div>
        </a>
      </aside>
    </template>

    <template v-else>
      <p class="text-xl p-4">
        No photos found. Please make sure that you have uploaded some images using this app.
      </p>
    </template>
  </div>
</template>
