# 🚀 INSTRUCCIONES RÁPIDAS - PWA ACTUALIZADA

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

### ✅ Ahora Funciona Correctamente:
1. **Prompt de instalación** - Aparece botón "Instalar Áurea"
2. **Descarga completa** - Se descarga todo al instalar (29 aves + audios + imágenes)
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
- **Cache Storage** → ¿Existe `aurea-pwa-v1.0.6`?
- **Console** → ¿Hay errores rojo?

### Limpia Caché:
- Chrome: Settings → Storage → Clear all
- Firefox: Preferences → Storage → Clear all

---

## 📝 Archivos Principales

| Archivo | Cambio |
|---------|--------|
| `public/sw.js` | Mejorado versión 1.0.6 |
| `public/scrips/app.js` | NUEVO - registra SW |
| `public/manifest.json` | Completado |
| Todas las páginas .astro | Incluyen app.js |

---

## ✨ Listo para Producción

Build completada exitosamente. Puedes desplegar directamente.

