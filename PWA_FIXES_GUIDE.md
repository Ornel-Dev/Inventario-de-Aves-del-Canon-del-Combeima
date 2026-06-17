# Guía de Correcciones PWA - Áurea

## 🎯 Resumen de Cambios Realizados

Se han implementado correcciones completas para que tu PWA funcione correctamente en dispositivos móviles con:
- ✅ Notificación de instalación visible
- ✅ Descarga completa de contenido al instalar
- ✅ Notificación de actualizaciones disponibles
- ✅ Manejo correcto de múltiples dominios
- ✅ Mejor rendimiento y caching

---

## 📝 Archivos Modificados

### 1. **public/manifest.json** 
Actualizado con campos críticos faltantes:
```json
- scope: "/" (define el área de la app)
- orientation: "portrait-primary"
- categories: ["travel", "lifestyle"]
- screenshots (para mejor visualización en app store)
- purpose: "any" en icons
```

### 2. **public/sw.js** (Service Worker)
Completamente mejorado:
- ✅ Mejor manejo de descargas con timeout (8 segundos por archivo)
- ✅ Función `cacheWithTimeout()` para descargas lentas en móvil
- ✅ Progreso de instalación reportado al cliente
- ✅ Caché de primera estrategia (Cache First + Network Fallback)
- ✅ Limpieza automática de cachés viejos
- ✅ Logs con emojis para debug fácil
- ✅ Fallback offline mejorado

### 3. **public/scrips/app.js** (Script Cliente - NUEVO)
Script completo de PWA con:
- ✅ **Registro automático del Service Worker**
- ✅ **Detección de actualizaciones disponibles**
  - Muestra banner verde con botón "Actualizar"
- ✅ **Prompts PWA nativo**
  - Botón "Instalar Áurea" flotante
  - Escucha evento beforeinstallprompt
- ✅ **Progreso de instalación**
  - Recibe mensajes del SW
- ✅ **Recarga automática** cuando hay nueva versión

### 4. **Todas las páginas Astro** (11 archivos)
Actualizado el registro del Service Worker:

**Archivos modificados:**
```
✓ src/pages/index.astro
✓ src/pages/aves.astro  
✓ src/pages/rutas.astro
✓ src/pages/contacto.astro
✓ src/pages/nosotros.astro
✓ src/pages/aves/[slug].astro
✓ src/pages/rutas/[slug].astro
✓ src/pages/blog/index.astro
✓ src/pages/blog/guardian-de-las-alturas.astro
✓ src/pages/blog/el-nacimiento-de-aurea.astro
✓ src/pages/blog/como-empezar-en-el-aviturismo.astro
✓ src/pages/blog/bosques-de-niebla-en-peligro.astro
✓ src/pages/blog/mitologia-y-cantos-en-el-cañon.astro
✓ src/pages/blog/3-senderos-imperdibles-en-el-cañon-del-combeima.astro
```

Todos ahora incluyen:
```html
<script src="/scrips/app.js" is:inline></script>
```

---

## 🚀 Cómo Desplegar

### Paso 1: Compilación Local
```bash
npm run build
```

### Paso 2: Probar Localmente (Opcional)
```bash
npm run preview
```

### Paso 3: Desplegar en Vercel
```bash
# Si ya tienes Vercel CLI instalado
vercel --prod

# O simplemente hacer push a tu repo si está conectado
git add .
git commit -m "Fixes PWA: mejorados prompts, actualizaciones y caching"
git push origin main
```

---

## 📱 Cómo Probar en Móvil

### En Android:
1. Abre el navegador Chrome
2. Accede a tu URL (ej: `https://tudominio.com`)
3. **Espera 1-2 segundos** a que se registre el SW
4. Verás un botón **"Instalar Áurea"** flotante en la pantalla
5. Haz clic para instalar
6. El navegador descargará todo el contenido (29 aves, audios, imágenes)
7. La app aparecerá en tu menú de aplicaciones

### En iOS (iPhone):
1. Abre en Safari
2. Toca el botón **Compartir** (cuadro con flecha)
3. Selecciona **Agregar a Pantalla de Inicio**
4. La app quedará instalada

---

## 🔄 Cómo Funciona la Actualización

### Para el Usuario:
1. Abres la app (acceso directo o instalada)
2. El SW detecta una nueva versión disponible
3. **Aparece un banner verde** diciendo "✨ Nueva versión disponible"
4. Haces clic en **"Actualizar"**
5. La app se recarga automáticamente con la nueva versión

---

## 🌐 Manejo de Múltiples Dominios

El SW está configurado para reconocer:
- `*.vercel.app` (tu dominio de Vercel)
- `tudominio.com` (tu dominio principal)
- `otrositio.com` (redirecciones)

**Importante:** Todos los dominios deben servir HTTPS. Si uses HTTP en desarrollo, el SW no se registrará.

---

## 🛠️ Troubleshooting

### El botón "Instalar" no aparece
- **Solución 1:** Borra el caché del navegador (Settings → App Data → Cache)
- **Solución 2:** Espera 2-3 segundos a que el SW se registre
- **Solución 3:** Verifica en DevTools (F12 → Application → Service Workers)

### No se descargan las imágenes/audios
- Abre DevTools → Application → Cache Storage
- Verifica que haya un caché llamado `aurea-pwa-v1.0.6`
- Si no existe, fuerza una recarga con `Ctrl+Shift+R`

### La actualización no aparece
- Haz cambios en el código
- Compila: `npm run build`
- Despliega: `vercel --prod`
- En la app: Recarga completamente (cierra y abre)

---

## 📊 Monitoreo

### Ver logs del SW en DevTools:
1. Abre F12 (DevTools)
2. Ve a **Application** → **Service Workers**
3. Haz clic en el nombre del SW
4. Abre la **consola** para ver los logs

Los logs tendrán emojis para fácil identificación:
- 🔧 Instalando
- 📦 Cacheando
- ✅ Éxito
- ❌ Error
- ⚡ Desde caché
- 🌐 Desde red
- ⏳ Timeout

---

## 🎯 Próximas Mejoras (Opcionales)

- [ ] Agregar ícono de la app en manifest
- [ ] Implementar notificaciones push
- [ ] Agregar widget de instalación personalizado
- [ ] Analytics de uso offline
- [ ] Estadísticas de qué contenido se usa más

---

## ✅ Checklist Pre-Producción

Antes de enviar a tus usuarios:

- [ ] Compilar con `npm run build`
- [ ] Desplegar a Vercel
- [ ] Esperar 5 minutos (CDN cache)
- [ ] Probar en Android (Chrome)
- [ ] Probar en iOS (Safari)
- [ ] Verificar que aparece el prompt de instalación
- [ ] Instalar la app en móvil
- [ ] Verificar que se descargó todo
- [ ] Hacer un cambio en el código
- [ ] Verificar que muestra notificación de actualización
- [ ] Actualizar y verificar

---

## 📞 Soporte

Si tienes problemas, verifica:
1. Consola de DevTools (F12)
2. Application → Service Workers
3. Application → Cache Storage
4. DevTools → Network (para ver peticiones)

Los logs del SW tendrán pistas sobre qué está pasando.

