<p align="center">
  <a href="https://angular.io/" target="blank"><img src="https://angular.io/assets/images/logos/angular/angular.svg" width="120" alt="Angular Logo" /></a>
  <a href="https://ionicframework.com/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ionic_Logo.svg/1280px-Ionic_Logo.svg.png" width="290" alt="Ionic Logo"/></a>
</p>

# Films - Aplicación de Películas con Ionic y Angular

Aplicación móvil híbrida desarrollada con **Ionic** y **Angular**, que permite a los usuarios explorar películas populares, buscar títulos y gestionar una lista de favoritos. Utiliza **The Movie Database (TMDB)** como fuente de datos, integrando funcionalidades como navegación por pestañas, filtros y almacenamiento local.

## **Características principales**

- 🔍 **Exploración de películas recientes:** Consulta títulos populares del mes actual.
- ⭐ **Lista de favoritos:** Almacena tus películas favoritas.
- 🧭 **Navegación fluida:** Interfaz intuitiva con navegación por pestañas.
- 📶 **Acceso a datos en tiempo real:** Conexión a la API de TMDB.

## **Tecnologías y herramientas utilizadas**

- **Framework:** Ionic `v6.1.9`, Angular `v14.0.0`
- **Backend:** The Movie Database API (TMDB)
- **Desarrollo móvil:** Capacitor `v3.6.0`
- **Estilos:** SCSS, Ionic Core Styles

## **Requisitos previos**

- Node.js >= v14
- Ionic CLI
- Angular CLI

## **Instalación y configuración**

```bash
# Clonar el repositorio
git clone https://github.com/ramon-molinero/films.git && cd films

# Instalar dependencias
npm install
```

## **Configurar claves de la API de TMDB**

Edita los archivos `src/environments/environment.ts` y `src/environments/environment.prod.ts` y añade tu clave de la API.

## **Ejecutar el proyecto**

```bash
# Modo desarrollo
ionic serve

# Compilar para Android
ionic capacitor build android

# Compilar para iOS
ionic capacitor build ios
```

## **Despliegue**

Utiliza Firebase Hosting o tu plataforma preferida para desplegar la versión web.

