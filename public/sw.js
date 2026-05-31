const CACHE_NAME = 'aves-tolima-v1';

// Archivos esenciales que se descargan apenas se abre la app
const urlsToCache = [
  // Core y Configuración
  '/',
  '/manifest.json',
  '/styles/style.css',
  '/favicon.svg',
  '/favicon.ico',
  '/scrips/app.js',
  '/icons/logo.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',

  // Páginas Principales
  '/nosotros/',
  '/contacto/',
  '/blog',
  '/aves',
  '/aves/',
  '/rutas',
  '/rutas/',

  // Fichas de Aves (Páginas)
  '/aves/colibri-capirotado',
  '/aves/tangara-luctuosa',
  '/aves/tangara-flamigera',
  '/aves/piranga-abejera',
  '/aves/tangara-cabeciazul',
  '/aves/tangara-azuleja',
  '/aves/barranquero',
  '/aves/tirano-tropical',
  '/aves/tangara-dorsirroja',
  '/aves/canario',
  '/aves/gavilan-caminero',
  '/aves/bienteveo-comun',
  '/aves/ibis-afeitado',
  '/aves/gallinazo-negro',
  '/aves/tangara-palmera',
  '/aves/eufonia-piquigruesa',
  '/aves/colibri-colirrufo',
  '/aves/tortolita-rojiza',
  '/aves/buco-bigotudo',
  '/aves/saltarin-cabecidorado',
  '/aves/paloma-tolimense',
  // NOTA: Asegúrate de añadir aquí las rutas de las 8 aves restantes para completar las 29
  // '/aves/nombre-de-tu-ave-22',
  // '/aves/nombre-de-tu-ave-23',
  // '/aves/nombre-de-tu-ave-24',
  // '/aves/nombre-de-tu-ave-25',
  // '/aves/nombre-de-tu-ave-26',
  // '/aves/nombre-de-tu-ave-27',
  // '/aves/nombre-de-tu-ave-28',
  // '/aves/nombre-de-tu-ave-29',

  // Rutas de Avistamiento (Páginas)
  '/rutas/cascada-la-plata',
  '/rutas/ruta-de-la-fruta',
  '/rutas/termales-el-rancho',

  // Imágenes Generales y de Fondo
  '/imgs/colibricabecicastano.jpg',
  '/imgs/cascadalaplata.avif',
  '/imgs/rutafruta.avif',
  '/imgs/ranchotermales.avif',

  // Imágenes de Aves (WebP)
  '/imgs/aves/colibricapirotado.webp',
  '/imgs/aves/tangarahombriblanca.webp',
  '/imgs/aves/tangaraflamigera.webp',
  '/imgs/aves/pirangaroja.webp',
  '/imgs/aves/tangaracabeciazul.webp',
  '/imgs/aves/palomatolimense.webp',

  // Audios (Cantos de Aves)
  '/audios/XC574195-Amaziliacapiazul-Saucerottiacyanifrons.mp3',
  '/audios/XC830534-Tangaraluctuosa-Loriotusluctuosus.mp3',
  '/audios/XC1009383-Tangaraflamígera-Ramphocelusflammigerusicteronotus.mp3',
  '/audios/XC942839-Pirangaroja-Pirangarubra.mp3',
  '/audios/XC912048-Tangaracabeciazul-Stilpniacyanicolliscyanopygia.mp3',
  '/audios/XC576276-PalomamontarazdeTolima-Leptotilaconoveri.mp3',

  // Archivos de Build y Scripts de Componentes (Astro)
  '/_astro/Qrcode.astro_astro_type_script_index_0_lang.DB0GZjzT.js',
  '/_astro/_slug_.D3_umLKE.css'
];

// Instalación: Guarda el esqueleto de la app
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Interceptor de peticiones (El que hace la magia offline)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 1. Si la foto, audio o página ya está en el celular, la muestra al instante.
        if (response) {
          return response;
        }
        
        // 2. Si no está guardada, la busca en internet...
        return fetch(event.request).then(networkResponse => {
          // ... y la guarda en la caché automáticamente para tu próxima visita al campo.
          return caches.open(CACHE_NAME).then(cache => {
            // Se excluyen extensiones de Chrome u otros requests raros
            if (event.request.url.startsWith('http')) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
  );
});