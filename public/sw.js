const CACHE_NAME = 'aves-tolima-v3'; // Incrementamos la versión

const CORE_ASSETS = [
    '/',
    '/manifest.json',
    '/styles/style.css',
    '/favicon.svg',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
];

// Aquí van tus 29 aves y rutas
const MEDIA_ASSETS = [

    // Páginas Principales


    '/aves',

    '/aves/',

    '/rutas',

    '/rutas/',



    // Fichas de Aves (Páginas de las 29 especies)

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






// 1. UNIFICAMOS EL EVENTO INSTALL
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            // Guardamos lo básico primero
            await cache.addAll(CORE_ASSETS);

            // Intentamos descargar el resto uno por uno para evitar bloqueos
            MEDIA_ASSETS.forEach(async (url) => {
                try {
                    await cache.add(url);
                } catch (error) {
                    console.warn(`No se pudo precargar: ${url}`);
                }
            });
        })
    );
});

// 2. INTERCEPTOR MEJORADO PARA ESTILOS DE ASTRO
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            // Si está en caché, lo devolvemos
            if (response) return response;

            // Si no está, lo buscamos en internet
            return fetch(event.request).then(networkResponse => {
                return caches.open(CACHE_NAME).then(cache => {
                    // REGLA DE ORO: Si es un archivo de Astro (CSS/JS dinámico), lo guardamos
                    if (event.request.url.includes('/_astro/') || event.request.url.startsWith('http')) {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                });
            });
        })
    );
});