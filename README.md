# taller-a11y-keepcoding

En este repositorio encontraras el contenido práctico para el taller básico de accesibilidad de Keepcoding 2024.

Para iniciar este proyecto es necesario tener instalado [Node.js](https://nodejs.org/en). Puedes usar cualquier versión superior a la 18, pero se recomienda la 20.11.0.

## Iniciar la APP.

Instalar dependencias.

```bash
npm i
```

Ejecutar la app

```bash
npm run dev
```

Podrás acceder a la web en: http://localhost:5173/

## Contenido del repositorio

Tenemos un repositorio con una aplicación de [React](https://react.dev/) creada con [Vite](https://vitejs.dev/guide/), la cual tiene los siguientes archivos:

- Un archivo index.html con el layout de la página.
- Una carpeta con los assets de la aplicación en `src/assets`.
- Una carpeta con los textos de la página Home en `src/data`.
- Dos páginas localizadas en `src/pages/inaccessible/Home`, `src/pages/checkbox` y `src/pages/inaccessible/Blog`.

```
index.html
|-public
|-src
|---assets
|-----RRSS
|-----blog
|-----languages
|---data
|---pages
|-----checkbox
|-----inaccessible
|-------Blog
|-------Home
```

Durante el curso vamos a revisar esas páginas y resolver los problemas de accesibilidad que tienen.

## Ramas con el contenido y la solución

- [01 - Contenido inicial](https://github.com/kevinccbsg/taller-a11y-keepcoding/tree/01-init)
- [02 - Solución](https://github.com/kevinccbsg/taller-a11y-keepcoding/tree/02-solution)
