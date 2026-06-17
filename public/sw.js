const CACHE_NAME = '1.0.5.0'; // Incrementamos la versión para forzar la limpieza en los celulares
//Comentario de version aumentada
//1606.1.1
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
