<template>
  <div>
    <button @click="openWidget" id="upload_widget" class="cloudinary-button">Upload files</button>

    <!-- Mostrar todas las imágenes cargadas -->
    <div v-if="uploadedImages.length > 0">
      <h3>Imágenes cargadas:</h3>
      <div v-for="(image, index) in uploadedImages" :key="index">
        <img :src="image" alt="Imagen cargada" class="uploaded-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Variables de entorno para Cloudinary
const cloudName = import.meta.env.VITE_CLOUD_NAME
const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET

// Arreglo reactivo para almacenar todas las imágenes cargadas
const uploadedImages = ref([])

// Tags personalizadas
const tags = ['all', 'tattooing', 'tools', 'cat', 'designs', 'test']
const getMyTags = (cb, prefix) => cb(prefix ? tags.filter((t) => !t.indexOf(prefix)) : tags)

// Crear el widget de carga
const widget = cloudinary.createUploadWidget(
  {
    cloudName,
    uploadPreset,
    // Opciones adicionales
    // cropping: true,
    // clientAllowedFormats: ['images'], // Solo imágenes
    sources: ['local', 'url'],
    maxImageFileSize: 2000000,
    showAdvancedOptions: true,
    getTags: getMyTags
    // language: 'en',
    // text: {
    //   en: {
    //     queue: {
    //       title: 'Files to upload',
    //       title_uploading_with_counter: 'Uploading {{num}} files'
    //     },
    //     crop: {
    //       title: 'Crop your image'
    //     }
    //   }
    // }
  },
  (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log('Imagen subida exitosamente:', result.info)
      // Añadir la URL de la nueva imagen al arreglo de imágenes cargadas
      uploadedImages.value.push(result.info.secure_url)
    }
  }
)

// Función para abrir el widget
const openWidget = () => {
  widget.open()
}
</script>

<style scoped>
.cloudinary-button {
  padding: 10px 20px;
  background-color: #0073e6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.cloudinary-button:hover {
  background-color: #005bb5;
}

.uploaded-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 10px;
}
</style>
