const CACHE_NAME = 'aves-tolima-v1';

// Archivos esenciales que se descargan apenas se abre la app
const urlsToCache = [
  '/',
  '/manifest.json',
  '/styles/style.css',
  '/favicon.svg'
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