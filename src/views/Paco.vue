<script setup></script>

<template>
  <div id="wrapper" class="relative">
    <!-- Header -->
    <header
      id="banner"
      class="bg-cover bg-center bg-no-repeat flex flex-col p-6"
      style="background-image: url('/images/banner-images/banner-image-1.jpg')"
    >
      <div id="header" class="flex justify-between items-center h-16">
        <div id="logo" class="flex items-center">
          <!-- Logo en el banner -->
          <img src="/images/logo.png" alt="Landing Page" class="h-8 mr-4" />
          <!-- Logo en la barra de navegación -->
          <!-- <img src="/images/logo-2.png" alt="Landing Page" class="hidden md:inline-block h-8" /> -->
        </div>

        <!-- Iconos sociales -->
        <aside>
          <ul class="flex space-x-4 text-gray-500">
            <li>
              <a
                href="https://www.facebook.com/username"
                target="_blank"
                class="hover:text-blue-600"
              >
                <i class="fa fa-facebook"></i> <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="http://google.com/+username" target="_blank" class="hover:text-red-500">
                <i class="fa fa-google-plus"></i> <span>Google+</span>
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com/username" target="_blank" class="hover:text-blue-400">
                <i class="fa fa-twitter"></i> <span>Twitter</span>
              </a>
            </li>
            <!-- Agrega los demás enlaces de iconos sociales -->
          </ul>
        </aside>

        <!-- Navegación principal -->
        <nav id="nav-main" class="hidden md:flex space-x-4 text-sm">
          <a href="#about" class="text-gray-700 hover:text-yellow-500">About</a>
          <a href="#gallery" class="text-gray-700 hover:text-yellow-500">Gallery</a>
          <!-- Otros enlaces del menú -->
        </nav>

        <div id="nav-trigger" class="md:hidden">
          <!-- Icono de hamburguesa o botón para menú móvil -->
        </div>
      </div>

      <!-- Contenido del banner -->
      <div id="banner-content" class="flex flex-col items-center py-20">
        <div class="text-center max-w-md">
          <h1 class="text-5xl font-bold">A FREE AND SIMPLE LANDING PAGE</h1>
          <h2 class="text-xl font-light mt-4">
            Namari is a free landing page template you can use for your projects. It is free to use
            for your personal and commercial projects, enjoy!
          </h2>

          <!-- Llamado a la acción -->
          <a
            href="#"
            class="mt-6 inline-block bg-black text-white font-semibold py-3 px-6 rounded hover:bg-yellow-600"
          >
            START CREATING TODAY
          </a>
        </div>
      </div>
    </header>

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
      <aside
        id="gallery"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-20"
      >
        <a href="/images/gallery-images/gallery-image-1.jpg" class="relative group">
          <img
            src="/images/gallery-images/gallery-image-1.jpg"
            alt="Landing Page"
            class="w-full h-auto"
          />
          <div
            class="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"
          ></div>
        </a>
        <!-- Repetir para cada imagen de galería -->
      </aside>

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

    <!-- Footer -->
    <footer id="landing-footer" class="py-8 p-6 bg-gray-800 text-gray-400">
      <div class="flex justify-between items-center">
        <p class="text-sm">
          Made with love by
          <a href="https://www.shapingrain.com" class="text-white hover:text-yellow-500"
            >ShapingRain</a
          >
        </p>
        <ul class="flex space-x-4">
          <li>
            <a href="https://www.facebook.com/username" target="_blank" class="hover:text-blue-600"
              >Facebook</a
            >
          </li>
          <li>
            <a href="http://google.com/+username" target="_blank" class="hover:text-red-500"
              >Google+</a
            >
          </li>
          <li>
            <a href="http://www.twitter.com/username" target="_blank" class="hover:text-blue-400"
              >Twitter</a
            >
          </li>
          <!-- Agrega más iconos según sea necesario -->
        </ul>
      </div>
    </footer>
  </div>
</template>
