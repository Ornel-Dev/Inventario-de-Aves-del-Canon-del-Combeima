const CACHE_NAME = 'aurea-pwa-v1.0.7'; // Versión v1.0.7 con descargas paralelas (50 simultáneos)
const TIMEOUT_DURATION = 8000; // 8 segundos de timeout por archivo
const PARALLEL_DOWNLOADS = 50; // Máximo de descargas simultáneas

const CORE_ASSETS = [
    '/',
    '/manifest.json',
    '/styles/style.css',
    '/favicon.svg',
    '/icons/icon-192.png',
    '/icons/icon-512.png',
    '/icons/logo.png',
    '/fuentes/Kablammo.ttf'
];

// Mantén aquí EXACTAMENTE tu mismo array con tus 29 aves, audios e imágenes
const MEDIA_ASSETS = [
    '/aves',
    '/aves/',
    '/rutas',
    '/rutas/',
    '/nosotros',
    '/nosotros/',

    '/blog',
    '/blog/',


    '/aves/tangara-azuleja',
    '/aves/barranquero',
 
    '/aves/tirano-tropical',
    '/aves/tangara-dorsirroja',
    '/aves/canario',
    '/aves/tangara-cabeciazul',
    '/aves/gavilan-caminero',
    '/aves/bienteveo-comun',
    '/aves/ibis-afeitado',
    '/aves/guacharaca-colombiana',
    '/aves/gallinazo-negro',
    '/aves/tangara-palmera',
    '/aves/eufonia-piquigruesa',
    '/aves/colibri-colirrufo',
    '/aves/colibri-capirotado',
    '/aves/tortolita-rojiza',
    '/aves/tangara-rastrojera',
    '/aves/paloma-tolimense',
    '/aves/colibri-del-tolima',
    '/aves/buco-bigotudo',
    '/aves/tangara-luctuosa',
    '/aves/tangara-dorada',
    '/aves/piranga-abejera',
    '/aves/oropendola-crestada',
    '/aves/garcita-bueyera',
    '/aves/carpintero-bellotero',
    '/aves/tangara-flamigera',
    '/aves/loro-orejiamarillo',
    '/aves/saltarin-cabecidorado',


    // Rutas de Avistamiento (Páginas)

    '/rutas/cascada-la-plata',
    '/rutas/ruta-de-la-fruta',
    '/rutas/termales-el-rancho',



    // Imágenes Generales y de Fondo

    '/imgs/colibricabecicastano.jpg',
    '/imgs/cascadalaplata.avif',
    '/imgs/rutafruta.avif',
    '/imgs/ranchotermales.avif',



    // Imágenes de Aves (WebP - 29 especies completas)

    '/imgs/aves/tangaraazuleja.webp',
    '/imgs/aves/momotobarranquero.webp',
    '/imgs/aves/tiranotropical.webp',
    '/imgs/aves/tangaradorsirroja.webp',
    '/imgs/aves/canario.webp',
    '/imgs/aves/tangaracabeciazul.webp',
    '/imgs/aves/gavilancaminero.webp',
    '/imgs/aves/bienteveocomun.webp',
    '/imgs/aves/ibisafeitaido.webp',
    '/imgs/aves/guacharacacolombiana.webp',
    '/imgs/aves/gallinazonegro.webp',
    '/imgs/aves/tangarapalmera.webp',
    '/imgs/aves/eufoniapiquigruesa.webp',
    '/imgs/aves/colibricolirrufo.webp',
    '/imgs/aves/colibricapirotado.webp',
    '/imgs/aves/tortolitarojiza.webp',
    '/imgs/aves/tangararastrojera.webp',
    '/imgs/aves/palomatolimense.webp',
    '/imgs/aves/colibrideltolima.webp',
    '/imgs/aves/bucobigotudo.webp',
    '/imgs/aves/tangarahombriblanca.webp',
    '/imgs/aves/tangaradorada.webp',
    '/imgs/aves/pirangaroja.webp',
    '/imgs/aves/oropendolacrestada.webp',
    '/imgs/aves/garcitabueyera.webp',
    '/imgs/aves/carpinterobellotero.webp',
    '/imgs/aves/tangaraflamigera.webp',
    '/imgs/aves/loroorejiamarillo.webp',
    '/imgs/aves/saltarincabecidorado.webp',


    // Audios (Cantos de Aves - 29 audios completos)

    '/audios/XC980357-Tangaraazuleja-Thraupisepiscopus.mp3',
    '/audios/XC561973-Momotoamazónico-Momotusmomota.mp3',
    '/audios/XC534022-Tiranomelancólico-Tyrannusmelancholicus.mp3',
    '/audios/XC878414-Tangaradorsirroja-Ramphocelusdimidiatus.mp3',
    '/audios/XC1053969-Chirigüeazafranado-Sicalisflaveola.mp3',
    '/audios/XC912048-Tangaracabeciazul-Stilpniacyanicolliscyanopygia.mp3',
    '/audios/XC1040654-Busardocaminero-Rupornismagnirostrismagnirostris.mp3',
    '/audios/XC1080134-Bienteveocomún-Pitangussulphuratus.mp3',
    '/audios/XC745517-Ibisafeitado-Phimosusinfuscatus.mp3',
    '/audios/XC919204-Chachalacacolombiana-Ortaliscolumbiana.mp3',
    '/audios/XC573735-Zopilotenegro-Coragypsatratus.mp3',
    '/audios/XC1067985-Tangarapalmera-Thraupispalmarum.mp3',
    '/audios/XC1017123-Eufoniapiquigruesa-Euphonialaniirostris.mp3',
    '/audios/XC1070227-Amaziliatzacatl-Amaziliatzacatl.mp3',
    '/audios/XC574195-Amaziliacapiazul-Saucerottiacyanifrons.mp3',
    '/audios/XC421474-Columbinacolorada-Columbinatalpacoti.mp3',
    '/audios/XC540370-Tangaramatorralera-Stilpniavitriolina.mp3',
    '/audios/XC576276-PalomamontarazdeTolima-Leptotilaconoveri.mp3',
    '/audios/XC75199-TolimaBlossomcrown-Anthocephalaberlepschi.mp3',
    '/audios/XC821947-Bucobarbón-Malacoptilapanamensispoliopis.mp3',
    '/audios/XC830534-Tangaraluctuosa-Loriotusluctuosus.mp3',
    '/audios/XC449169-Tangarapechicastaña-Tangaraarthus.mp3',
    '/audios/XC942839-Pirangaroja-Pirangarubra.mp3',
    '/audios/XC793175-Caciquecrestado-Psarocoliusdecumanus.mp3',
    '/audios/XC1096304-Garcillabueyera-Bubulcusibis.mp3',
    '/audios/XC1136847-Carpinterobellotero-Melanerpesformicivorus.mp3',
    '/audios/XC1009383-Tangaraflamígera-Ramphocelusflammigerusicteronotus.mp3',
    '/audios/XC907183-Aratingaorejigualda-Ognorhynchusicterotis.mp3',
    '/audios/XC836991-Saltaríncabecidorado-Ceratopipraerythrocephala.mp3',



];

// Función auxiliar para descargar con timeout
async function cacheWithTimeout(cache, url) {
    return new Promise((resolve) => {
        const timeout = setTimeout(() => {
            console.warn(`⏱️ Timeout descargando: ${url}`);
            resolve(false);
        }, TIMEOUT_DURATION);

        cache.add(url)
            .then(() => {
                clearTimeout(timeout);
                console.log(`✅ Cacheado: ${url}`);
                resolve(true);
            })
            .catch(error => {
                clearTimeout(timeout);
                console.warn(`❌ Error cacheando ${url}:`, error);
                resolve(false);
            });
    });
}

// Función para descargar múltiples archivos en paralelo con límite
async function downloadWithLimit(cache, urls, limit) {
    let completed = 0;
    let failed = 0;
    let inProgress = 0;
    const queue = [...urls];
    const activePromises = [];

    return new Promise((resolve) => {
        const processNext = async () => {
            if (queue.length === 0 && inProgress === 0) {
                await Promise.all(activePromises);
                resolve({ completed, failed, total: urls.length });
                return;
            }

            if (queue.length > 0 && inProgress < limit) {
                const url = queue.shift();
                inProgress++;

                const promise = cacheWithTimeout(cache, url)
                    .then(success => {
                        if (success) completed++;
                        else failed++;
                        inProgress--;
                        // Reporta progreso cada archivo
                        self.clients.matchAll().then(clients => {
                            clients.forEach(client => {
                                client.postMessage({
                                    type: 'INSTALL_PROGRESS',
                                    cached: completed,
                                    failed: failed,
                                    total: urls.length
                                });
                            });
                        });
                        processNext();
                    });

                activePromises.push(promise);
                processNext();
            }
        };

        processNext();
    });
}

// 1. EVENT INSTALL: Descarga todo al instalar (en paralelo con límite de 50)
self.addEventListener('install', event => {
    console.log('🔧 Service Worker instalando (modo paralelo - 50 simultáneos)...');
    
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            console.log('📦 Cacheando archivos core...');
            
            // Instala archivos core primero
            try {
                await cache.addAll(CORE_ASSETS);
                console.log('✅ Core assets cacheados');
            } catch (error) {
                console.error('❌ Error cacheando core:', error);
            }

            // Descargas media assets EN PARALELO (máx 50 simultáneos)
            console.log(`📥 Descargando ${MEDIA_ASSETS.length} recursos en paralelo (50 a la vez)...`);
            
            const result = await downloadWithLimit(cache, MEDIA_ASSETS, PARALLEL_DOWNLOADS);
            
            console.log(`📊 Resultado: ${result.completed}/${result.total} descargados, ${result.failed} fallos`);
            
            // Notifica al cliente que está listo
            self.clients.matchAll().then(clients => {
                clients.forEach(client => {
                    client.postMessage({
                        type: 'INSTALL_COMPLETE',
                        cached: result.completed,
                        failed: result.failed,
                        total: result.total
                    });
                });
            });
        })
    );
    
    self.skipWaiting(); // Toma control inmediatamente
});

// 2. EVENT ACTIVATE: Limpia cachés viejos
self.addEventListener('activate', event => {
    console.log('🧹 Service Worker activando y limpiando...');
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log(`🗑️ Eliminando caché antiguo: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    
    self.clients.claim();
});

// 3. EVENT FETCH: Estrategia Cache First con Network Fallback
self.addEventListener('fetch', event => {
    // Solo GET y de nuestra propia app
    if (event.request.method !== 'GET') return;
    
    const url = new URL(event.request.url);
    
    // Si no es de nuestro dominio, ignora (importa para dominios múltiples)
    if (!url.origin.includes('vercel.app') && !url.hostname === self.location.hostname) {
        return;
    }

    event.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            const pathname = url.pathname;
            
            // Estrategia: Busca en caché primero
            return cache.match(event.request).then(response => {
                if (response) {
                    console.log(`⚡ Desde caché: ${pathname}`);
                    return response;
                }

                // Si no está en caché, normaliza la ruta (/ al final)
                const alternatives = [
                    pathname,
                    pathname.endsWith('/') ? pathname.slice(0, -1) : pathname + '/'
                ];

                for (const alt of alternatives) {
                    const match = cache.match(alt);
                    if (match) {
                        console.log(`⚡ Desde caché (alternativa): ${alt}`);
                        return match;
                    }
                }

                // Si nada en caché, va a la red
                console.log(`🌐 Fetch de red: ${pathname}`);
                return fetch(event.request)
                    .then(networkResponse => {
                        // Cachea dinámicamente recursos nuevos (builds nuevas de Astro, imágenes, audios)
                        if (pathname.includes('/_astro/') || 
                            pathname.startsWith('/imgs/') || 
                            pathname.startsWith('/audios/') ||
                            pathname.endsWith('.webp') ||
                            pathname.endsWith('.mp3')) {
                            cache.put(event.request, networkResponse.clone());
                        }
                        return networkResponse;
                    })
                    .catch(error => {
                        console.warn(`❌ Fetch fallido: ${pathname}`, error);
                        
                        // Fallback offline: si es una navegación, vuelve a home
                        if (event.request.mode === 'navigate') {
                            return cache.match('/').catch(() => {
                                return new Response('Offline - No hay caché disponible', {
                                    status: 503,
                                    statusText: 'Service Unavailable'
                                });
                            });
                        }
                        
                        return new Response('Recurso no disponible', {
                            status: 404,
                            statusText: 'Not Found'
                        });
                    });
            });
        })
    );
});