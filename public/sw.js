const CACHE_NAME = 'aves-tolima-v3.0.2'; // Incrementamos la versión para forzar la limpieza en los celulares
//...2.1
const CORE_ASSETS = [
    '/',
    '/manifest.json',
    '/styles/style.css',
    '/favicon.svg',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
];

// Mantén aquí EXACTAMENTE tu mismo array con tus 29 aves, audios e imágenes
const MEDIA_ASSETS = [
    '/aves',
    '/aves/',
    '/rutas',
    '/rutas/',
    '/aves/tangara-azuleja',
    '/aves/barranquero',
    // ... (Coloca aquí el resto de tus aves, audios e imágenes tal cual los tenías)
];

// 1. CORRECCIÓN EN INSTALL: Ahora sí obligamos al celular a esperar las descargas completas
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            // Guardamos el núcleo de la app primero
            await cache.addAll(CORE_ASSETS);

            // CORRECCIÓN: Usamos un bucle for...of para que el 'await' realmente detenga 
            // el proceso hasta que cada ave se descargue de forma segura.
            for (const url of MEDIA_ASSETS) {
                try {
                    await cache.add(url);
                } catch (error) {
                    console.warn(`No se pudo precargar en celular: ${url}`);
                }
            }
        })
    );
    self.skipWaiting(); // Fuerza a la nueva versión a tomar el control de inmediato
});

// Limpieza automática de versiones viejas de caché (Vital para celulares)
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('Borrando caché antiguo obsoleto:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// 2. CORRECCIÓN EN FETCH: Tolerancia de barras (/) para evitar bloqueos de rutas
self.addEventListener('fetch', event => {
    // Solo interceptamos peticiones GET de nuestra propia aplicación
    if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
        return;
    }

    event.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            const url = new URL(event.request.url);
            const pathname = url.pathname;

            // Paso A: Buscamos la coincidencia exacta tal cual la pidió el navegador
            return cache.match(event.request).then(response => {
                if (response) return response;

                // Paso B: Si no se encuentra, normalizamos la barra final (/)
                // Si pidió "/aves/barranquero/" busca "/aves/barranquero" y viceversa
                const alternativePath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname + '/';

                return cache.match(alternativePath).then(altResponse => {
                    if (altResponse) return altResponse;

                    // Paso C: Si no está en caché de ninguna forma, vamos a internet
                    return fetch(event.request).then(networkResponse => {
                        // Guardamos archivos dinámicos de Astro, imágenes o audios nuevos en caliente
                        if (pathname.includes('/_astro/') || pathname.startsWith('/imgs/') || pathname.startsWith('/audios/')) {
                            cache.put(event.request, networkResponse.clone());
                        }
                        return networkResponse;
                    }).catch(() => {
                        // Si falla internet y es una página, redirigimos a la raíz como salvavidas offline
                        if (event.request.mode === 'navigate') {
                            return cache.match('/');
                        }
                    });
                });
            });
        })
    );
});