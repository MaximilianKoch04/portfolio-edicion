# Maximiliano Koch · Portfolio de edición de video

Portfolio personal con estética pixel art en negro y blanco. Presentación como editor, nueve videos con audio, datos de contacto y enlaces a LinkedIn.

## Stack

HTML, CSS y JavaScript. No necesita instalar dependencias ni compilar. Las fuentes y los videos están alojados en este mismo repositorio.

## Ejecutar localmente

Descargar o clonar el repositorio y servir la carpeta con un servidor estático. Por ejemplo, con Python:

```bash
python -m http.server 8000
```

Abrir `http://localhost:8000`.

## Publicación

En **Settings → Pages → Source**, seleccionar **GitHub Actions**. El workflow publica la página después de cada cambio en `main`.

Los videos usan H.264 y AAC en archivos MP4, con `faststart`. Los reproductores muestran una portada y no descargan todos los videos al abrir la página. Al reproducir una muestra se pausan las otras.

La licencia de Ubuntu Mono está en `fonts/LICENSE-Ubuntu.txt`.
