<script setup>
import HeaderNav from '../components/layout/HeaderNav.vue'
import Footer from '../components/layout/Footer.vue'
import GalleryHome from '../components/layout/GalleryHome.vue'
import Loader from '../components/ui/Loader.vue'
</script>

<template>
  <div id="wrapper" class="relative container mx-auto">
    <!-- Header -->
    <HeaderNav></HeaderNav>

    <!-- Área de contenido principal -->
    <main id="content" class="space-y-20 p-6">
      <!-- Sección de introducción -->
      <section id="about" class="scrollto py-20">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="w-full md:w-1/3">
            <div class="text-center md:text-left">
              <h3 class="text-lg text-gray-500 uppercase">SUCCESS</h3>
              <h2 class="text-3xl font-semibold">How We Help You To Sell Your Product</h2>
              <p class="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div class="w-full md:w-2/3 grid gap-8">
            <!-- Bloque de iconos -->
            <div class="flex items-start space-x-4">
              <div class="text-yellow-500">
                <i class="fa fa-html5 text-3xl"></i>
              </div>
              <div>
                <h4 class="text-xl font-semibold">HTML5 &amp; CSS3</h4>
                <p class="text-gray-600">
                  Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis
                  choro neglegentur iudico.
                </p>
              </div>
            </div>
            <!-- Otros bloques de iconos similares -->
          </div>
        </div>
      </section>

      <!-- Galería -->
      <GalleryHome />

      <!-- Sección de servicios -->
      <div id="services" class="scrollto py-20">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="md:w-1/3">
            <blockquote class="text-right italic text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </blockquote>
            <footer class="text-right text-gray-500">— John Doe, Happy Customer</footer>
          </div>

          <div class="md:w-1/3">
            <div class="text-left">
              <h3 class="text-lg text-gray-500 uppercase">BELIEVING</h3>
              <h2 class="text-3xl font-semibold">Focusing On What Matters Most</h2>
              <p class="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div class="md:w-1/3">
            <img src="/images/dancer.jpg" alt="Dancer" class="w-full h-auto rounded" />
          </div>
        </div>
      </div>

      <!-- Testimonios -->
      <aside id="testimonials" class="scrollto text-center py-20 bg-gray-100">
        <div class="space-y-8">
          <div>
            <h3 class="text-lg text-gray-500 uppercase">FEEDBACK</h3>
            <h2 class="text-3xl font-semibold">What our customers are saying</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <blockquote class="flex flex-col items-center">
              <img src="/images/user-images/user-1.jpg" alt="User" class="w-24 h-24 rounded-full" />
              <q class="mt-4 italic text-gray-700"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua</q
              >
              <footer class="mt-2 text-gray-500">John Doe - Happy Customer</footer>
            </blockquote>
            <!-- Repetir para cada testimonio -->
          </div>
        </div>
      </aside>

      <!-- Clientes -->
      <section id="clients" class="scrollto py-20">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="w-full md:w-1/3 text-center md:text-left">
            <h3 class="text-lg text-gray-500 uppercase">TRUST</h3>
            <h2 class="text-3xl font-semibold">Companies who use our services</h2>
            <p class="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <a href="#" class="relative group">
              <img
                src="/images/company-images/company-logo1.png"
                alt="Company"
                class="w-full h-auto"
              />
              <div
                class="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"
              ></div>
            </a>
            <!-- Repetir para cada cliente -->
          </div>
        </div>
      </section>
    </main>
  </div>
  <!-- Footer -->
  <Footer></Footer>
</template>
