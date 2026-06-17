# 🔧 DETALLES TÉCNICOS - PWA Aurea v1.0.7 (PARALELO)

## Arquitectura del Service Worker - PARALELO

### Strategy de Descarga

**Antes (v1.0.5 - Secuencial):**
```javascript
for (const url of MEDIA_ASSETS) {
    await cacheWithTimeout(cache, url); // 8 segundos cada uno
}
// Total: 119 archivos × 8s = ~950 segundos = 17 minutos
```

**Ahora (v1.0.7 - Paralelo con límite de 50):**
```javascript
downloadWithLimit(cache, MEDIA_ASSETS, 50)
// Descarga 50 archivos simultáneamente
// Total: ~2-3 minutos
```

### Cómo Funciona downloadWithLimit

```javascript
1. Inicia cola con 119 URLs
2. Inicia 50 descargas al mismo tiempo
3. Cuando una termina, descarga la siguiente
4. Siempre mantiene 50 activas hasta vaciar la cola
5. Reporta progreso después de cada descarga
```

---

## Performance Comparado

| Métrica | v1.0.5 Secuencial | v1.0.7 Paralelo |
|---------|---|---|
| Tiempo instalación | ~17 min | ~2-3 min |
| Archivos simultáneos | 1 | 50 |
| Ancho de banda | 1 archivo | 50 archivos |
| **Mejora** | — | **85% más rápido** |

---

## Event Lifecycle
```
┌─ INSTALL (Primera vez)
│  ├─ Cachea CORE_ASSETS (manifest, css, fonts)
│  ├─ Cachea MEDIA_ASSETS en bucle con timeout de 8s
│  ├─ Reporta progreso al cliente via postMessage
│  └─ skipWaiting() → Toma control inmediatamente
│
├─ ACTIVATE (Cualquier cambio de versión)
│  ├─ Busca cachés con nombre diferente
│  ├─ Elimina cachés viejos (versiones anteriores)
│  └─ clients.claim() → Controla todas las tabs
│
└─ FETCH (Toda petición HTTP)
   ├─ Valida que sea GET de nuestro dominio
   ├─ Busca en CACHE_NAME
   ├─ Si no hay → intenta fetch de red
   ├─ Cachea dinámicamente archivos nuevos
   └─ Fallback offline si falla la red
```

## Strategy de Caching

### Cache First (Para contenido estable)
```javascript
CORE_ASSETS: Assets que no cambian
- manifest.json
- style.css
- Fuentes (*.ttf)
- Iconos (*.png)
```

### Network First (Para contenido dinámico)
```javascript
MEDIA_ASSETS: Contenido que podría cambiar
- Rutas HTML de aves, rutas, blog
- Imágenes de aves (*.webp)
- Audios (*.mp3)
- Buildfiles de Astro (/_astro/*)
```

### Timeout Strategy
```javascript
const TIMEOUT_DURATION = 8000; // 8 segundos por archivo

Si descarga toma más de 8s:
├─ Log de warning
├─ Continúa con el siguiente archivo
└─ Usuario puede recargar para reintentar
```

## Progreso de Descarga

### Cliente (app.js) Escucha:
```javascript
navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data.type === 'INSTALL_COMPLETE') {
        // {
        //   type: 'INSTALL_COMPLETE',
        //   cached: 120,     // Cuántos se descargaron exitosamente
        //   total: 127       // Total de recursos
        // }
        
        const percentage = (cached / total) * 100;
        // Aquí podrías mostrar una barra de progreso
    }
});
```

## Notificación de Actualizaciones

### Flow:
```
1. Nuevo build en servidor
2. Cliente detecta cambio en sw.js vía:
   registration.addEventListener('updatefound', ...)
3. Nuevo SW en estado 'installed' con controller activo
4. Muestra banner: "✨ Nueva versión disponible"
5. Usuario clicks "Actualizar"
6. Envía: registration.waiting.postMessage({type: 'SKIP_WAITING'})
7. Nuevo SW ejecuta: self.clients.claim()
8. Página detecta: navigator.serviceWorker 'controllerchange'
9. Automático: window.location.reload()
```

## Manejo de Múltiples Dominios

### Validación en fetch:
```javascript
const url = new URL(event.request.url);

// Aceptado si:
- url.origin.includes('vercel.app') 
  → tuapp.vercel.app, otraapp.vercel.app
  
- url.hostname === self.location.hostname
  → tudominio.com, www.tudominio.com
```

### HTTPS Requerido
```
HTTP → SW NO se registra (navegador rechaza)
HTTPS → SW se registra correctamente

Todos tus dominios deben usar HTTPS para que funcione
```

## Variables de Caché

### CACHE_NAME
```javascript
const CACHE_NAME = 'aurea-pwa-v1.0.6';

Cuando cambies esta versión:
1. Event activate busca caches con otro nombre
2. Elimina los viejos (garbage collection)
3. Nuevo SW cachea todo de nuevo
```

### CORE_ASSETS (8 items)
```javascript
[
  '/',                          // Home page
  '/manifest.json',             // App manifest
  '/styles/style.css',          // Estilos principales
  '/favicon.svg',               // Favicon
  '/icons/icon-192.png',        // Android launcher
  '/icons/icon-512.png',        // Android launcher (grande)
  '/icons/logo.png',            // Logo
  '/fuentes/Kablammo.ttf'       // Fuente custom
]

Tamaño approx: ~500KB
```

### MEDIA_ASSETS (119 items)
```javascript
- Páginas: /aves, /rutas, /nosotros, /blog/* (46 items)
- Imágenes: /imgs/aves/*.webp (29 items)
- Audios: /audios/*.mp3 (29 items)
- Fondos: /imgs/*.avif (3 items)
- Otros: /imgs/contacto/*.avif (2 items)

Tamaño approx: ~50-100MB (depende de la calidad de audio/imagen)
```

## Logs en Consola

### Símbolos de Debug:
```
🔧 = Instalando/configurando
📦 = Cacheando archivo
✅ = Éxito/completado
❌ = Error
⚡ = Respuesta desde caché
🌐 = Fetch de red
⏳ = Timeout (sin respuesta)
🗑️ = Eliminando caché viejo
📲 = beforeinstallprompt
🔄 = Actualización disponible
```

### Ver logs:
```
1. F12 → DevTools
2. Application → Service Workers
3. Haz click en el nombre del SW
4. Se abre la consola en nueva tab
5. Recarga la página (Ctrl+R)
```

## Límites y Consideraciones

### Storage Quota
```
Android: ~50MB de quota local
iOS: ~50MB de quota local
Windows: Sin límite realmente

Aurea: ~100MB en caché
→ Algunos dispositivos antiguos podrían no tener suficiente espacio
```

### Velocidad de Red
```
Primera instalación en 2G/3G: ~2-5 minutos
Primera instalación en 4G/LTE: ~30-60 segundos
Primera instalación en WiFi: ~10-15 segundos
```

### Renovación de Caché
```
Cada vez que cambias sw.js:
- Versión CACHE_NAME debe cambiar
- Todos los assets se descargan de nuevo
- Usuario usa más datos (cuidado con esto)
```

## Testing Local

### Dev Server
```bash
npm run dev
# Está en http://localhost:3000
# SW NO se registra en HTTP
# Prueba: npm run preview
```

### Preview (casi-producción)
```bash
npm run build
npm run preview
# Ahora en http://localhost:3000
# Aún en HTTP, SW no funciona
# Pero estructura es la misma que producción
```

### DevTools Emulation
```
1. F12 → DevTools
2. Ctrl+Shift+P → Device toolbar
3. Emula Pixel 5 o iPhone 12
4. Network: throttle a "Slow 3G"
5. Application: Simula offline
```

## Troubleshooting Avanzado

### SW no se registra
```
Checklist:
□ ¿Estoy en HTTPS?
□ ¿/sw.js existe y es accesible?
□ ¿No hay CORS headers bloqueando?
□ ¿Cache Storage está habilitado?
→ F12 → Application → Storage → Checklear
```

### Caché corrupto
```
Nuclear option:
1. F12 → Application → Service Workers → Unregister
2. Application → Storage → Clear all
3. Ctrl+Shift+Delete → Clear all browser data
4. Recarga la página
```

### Push notifications (futuro)
```
Para implementar notificaciones push:
1. Necesitas VAPID keys
2. Backend de suscripción
3. Evento push en SW:
   self.addEventListener('push', event => {
       const data = event.data.json();
       self.registration.showNotification(data.title);
   });
```

## Performance Metrics

### Esperado en producción:
```
First Load: 2-3MB de assets desde red
Subsequent: <100KB (caché + cambios)
Offline: Completamente funcional
TTFB (Time to First Byte): <500ms con caché
LCP (Largest Contentful Paint): <2s
```

---

**Versión:** 1.0.6  
**Última actualización:** 2026-06-16  
**Mantenedor:** Service Worker Aurea PWA Team

