<script setup>
import { onMounted } from 'vue'
import { useCloudinary } from '../../composables/useCloudinary'
import CldImage from '../../components/common/CldImage.vue'
import Loader from '../ui/Loader.vue'

const { photos, loading, getPhotos } = useCloudinary()

onMounted(() => {
  getPhotos()
})
</script>

<template>
  <div class="space-y-4">
    <template v-if="loading">
      <Loader />
    </template>

    <template v-else-if="photos.length !== 0">
      <aside
        id="gallery"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-20"
      >
        <a v-for="(photo, idx) in photos" :key="idx" :href="_Test" class="relative group">
          <!-- <h1>{{ photo }}</h1> -->
          <CldImage :publicId="photo.public_id" class="w-full h-auto" />
          <div
            class="flex items-center justify-center p-6 absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"
          >
            <p class="text-white">{{ photo.public_id }}</p>
          </div>
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
