# Proyecto Frontend con Vue 3

Este proyecto es una aplicación frontend desarrollada con Vue 3 y un conjunto de herramientas modernas para el desarrollo web.

## Stack Tecnológico

- Vue 3: Framework progresivo para construir interfaces de usuario.
- Vite: Build tool y servidor de desarrollo rápido.
- Vitest: Framework de pruebas unitarias para Vue.
- Cypress: Herramienta de pruebas end-to-end.
- Tailwind CSS: Framework de CSS utilitario para diseño rápido.
- Axios: Cliente HTTP basado en promesas para el navegador y node.js.
- Vue Router: Enrutador oficial para aplicaciones Vue.js.
- Pinia: Store para la gestión del estado en Vue.
- Vue I18n: Internacionalización para aplicaciones Vue.js.

## Configuración del Proyecto

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar pruebas unitarias
npm run test:unit

# Ejecutar pruebas e2e
npm run test:e2e

# Ejecutar pruebas e2e en modo desarrollo
npm run test:e2e:dev

# Ejecutar el linter
npm run lint
```

## Estructura del Proyecto

- `src/`: Contiene el código fuente de la aplicación.
  - `components/`: Componentes Vue reutilizables.
  - `views/`: Componentes de vista para las diferentes páginas.
  - `router/`: Configuración de Vue Router.
  - `store/`: Stores de Pinia para la gestión del estado.
  - `i18n/`: Configuración y archivos de traducción para internacionalización.
  - `main.js`: Punto de entrada de la aplicación.
- `public/`: Archivos estáticos que se sirven directamente.
- `tests/`: Directorio para pruebas unitarias y e2e.

## Componentes de Ejemplo

1. `Header.vue`: Un componente de encabezado que muestra el título de la aplicación y un menú de navegación.
2. `Counter.vue`: Un componente de contador que utiliza Pinia para la gestión del estado.

## Internacionalización

El proyecto soporta español e inglés. Puedes cambiar el idioma utilizando el botón en la página principal.

## Pruebas

- Vitest se utiliza para pruebas unitarias.
- Cypress se utiliza para pruebas end-to-end.

Ejecuta `npm run test:unit` para las pruebas unitarias y `npm run test:e2e` para las pruebas end-to-end.

## Contribuir

Las contribuciones son bienvenidas. Por favor, asegúrate de actualizar las pruebas según sea necesario.
