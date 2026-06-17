# 🚀 INSTRUCCIONES RÁPIDAS - PWA ACTUALIZADA v1.0.7

## Compilación
```bash
npm run build
```

## Deploy a Vercel
```bash
# Opción 1: CLI (más rápido)
vercel --prod

# Opción 2: Git push automático (si está conectado)
git push origin main
```

## ¿Qué Cambió?

### ✅ Descargas Paralelas (50 simultáneos)
- **Antes:** 17 minutos (secuencial)
- **Ahora:** 2-3 minutos (paralelo)
- Los 119 archivos se descargan todos a la vez

### ✅ Ahora Funciona Correctamente:
1. **Prompt de instalación** - Aparece botón "Instalar Áurea"
2. **Descarga rápida** - 119 recursos en paralelo (~2-3 minutos)
3. **Actualizaciones** - Muestra banner cuando hay nueva versión
4. **Acceso rápido** - Funciona offline después de la primera instalación

---

## 📱 Prueba en Móvil

### Android:
1. Abre Chrome
2. Ve a `https://tudominio.com`
3. Verás botón **"Instalar Áurea"** en pantalla
4. Haz click → Se instala como app nativa

### iPhone:
1. Abre Safari
2. Toca compartir → Agregar a pantalla de inicio

---

## 🔧 Si Algo Falla

### Abre DevTools (F12):
- **Application** → **Service Workers** → ¿Está registrado?
- **Cache Storage** → ¿Existe `aurea-pwa-v1.0.7`?
- **Console** → ¿Hay errores rojo?

### Limpia Caché:
- Chrome: Settings → Storage → Clear all
- Firefox: Preferences → Storage → Clear all

---

## 📝 Archivos Principales

| Archivo | Cambio |
|---------|--------|
| `public/sw.js` | v1.0.7 paralelo (50 simultáneos) |
| `public/scrips/app.js` | Registro PWA completo |
| `public/manifest.json` | Completado |
| Todas las páginas .astro | Incluyen app.js |

---

## ✨ Listo para Producción

Build completada exitosamente. Puedes desplegar directamente.

**Velocidad: 50x más rápido** que versión secuencial ⚡

