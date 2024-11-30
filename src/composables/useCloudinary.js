import { ref } from 'vue'

export function useCloudinary() {
  const photos = ref([])
  const loading = ref(false)

  const getPhotos = async (tag) => {
    loading.value = true
    try {
      const cloudName = import.meta.env.VITE_CLOUD_NAME
      const url = `https://res.cloudinary.com/${cloudName}/image/list/${tag || 'all'}.json`

      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to fetch images')
      }
      const data = await response.json()
      photos.value = data.resources
    } catch (error) {
      console.error(error)
      photos.value = []
    } finally {
      loading.value = false
    }
  }

  return { photos, loading, getPhotos }
}
