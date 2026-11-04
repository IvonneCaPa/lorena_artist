# Lorena Artist

Landing page para la marca de belleza y formación profesional **Lorena Artist**, enfocada en maquillaje, peluquería, pelucas, uñas press-on y cursos especializados en Barcelona.

## Descripción

Este proyecto es una web estática y de una sola página diseñada para promocionar servicios profesionales de belleza y cursos de maquillaje. La página combina branding premium, diseño oscuro con tonos rosa/lila y secciones para:

- presentación de la marca
- servicios ofrecidos
- listado de precios
- formaciones y masterclasses
- galería de trabajos
- contacto y reserva por WhatsApp

## Características

- Diseño responsive para móvil, tablet y escritorio
- Hero section con branding visual y CTA a WhatsApp
- Sección de servicios con cards dinámicas
- Tabs de precios por categoría
- Cursos y temarios con modal interactivo
- Galería de trabajos con imágenes y estilo polaroide
- Enlaces directos a Instagram, TikTok y WhatsApp
- Estructura ligera sin dependencias de compilación

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript vanilla
- Tailwind CSS (via CDN)
- Font Awesome
- Google Fonts

## Estructura del proyecto

```text
lorena_artist/
├── index.html
├── favicon.ico
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── logo.jpg
│   ├── lorena.jpg
│   ├── maquillaje01.jpg
│   ├── maquillaje02.jpg
│   ├── maquillaje03.jpg
│   └── maquillaje04.jpg
├── fonts/
└── README.md
```

## Cómo arrancarlo

Como es un sitio estático, no requiere instalación ni build tools. Puedes abrir directamente `index.html` en el navegador o servir la carpeta localmente con un servidor simple:

### Opción 1: abrir directamente

```bash
start index.html
```

### Opción 2: servidor local

```bash
python -m http.server 8000
```

Luego abre en el navegador:

```text
http://localhost:8000
```

## Información de contacto

- WhatsApp: +34 663 536 884
- Instagram: @lorena.artist_
- TikTok: @lorena.artist_
- Ubicación: Barcelona, España

## Nota

La web usa imágenes locales dentro de la carpeta `img/` y recursos externos de CDNs para estilos y tipografías. Si quieres personalizar el texto, precios, enlaces o datos de contacto, puedes editar `index.html` y `js/script.js`.

## Licencia

Este proyecto está pensado para uso personal y promocional de la marca Lorena Artist. Si se reutiliza, se recomienda mantener los créditos y referencias a la identidad visual original.
