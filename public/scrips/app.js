// =====================================================
// PWA - REGISTRO DE SERVICE WORKER Y NOTIFICACIONES
// =====================================================

// Registra el Service Worker cuando el documento está listo
document.addEventListener('DOMContentLoaded', () => {
    registerServiceWorker();
    setupFooterLinks();
    setupPWAPrompt();
});

// 1. REGISTRAR SERVICE WORKER
async function registerServiceWorker() {
    if (!navigator.serviceWorker) {
        console.warn('⚠️ Service Workers no soportados en este navegador');
        return;
    }

    try {
        console.log('📱 Registrando Service Worker...');
        const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/'
        });
        
        console.log('✅ Service Worker registrado:', registration);

        // Detecta cuando hay una actualización disponible
        registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // Hay una versión nueva esperando
                    notifyUpdateAvailable(registration);
                }
            });
        });

        // Recibe mensajes del SW (como progreso de instalación)
        navigator.serviceWorker.addEventListener('message', (event) => {
            console.log('💬 Mensaje del SW:', event.data);
            
            if (event.data.type === 'INSTALL_PROGRESS') {
                const { cached, failed, total } = event.data;
                const percentage = Math.round((cached / total) * 100);
                console.log(`⏳ Progreso: ${percentage}% (${cached}/${total}, ${failed} fallos)`);
                showInstallProgress(cached, total, failed, percentage);
            }
            
            if (event.data.type === 'INSTALL_COMPLETE') {
                const { cached, failed, total } = event.data;
                const percentage = Math.round((cached / total) * 100);
                console.log(`📊 Instalación completada: ${cached}/${total} (${failed} fallos)`);
                showInstallProgress(cached, total, failed, percentage);
            }
        });

    } catch (error) {
        console.error('❌ Error registrando Service Worker:', error);
    }
}

// 2. NOTIFICA CUANDO HAY ACTUALIZACIÓN DISPONIBLE
function notifyUpdateAvailable(registration) {
    console.log('🔄 Actualización disponible');
    
    // Muestra un banner o notificación en la app
    const updateBanner = document.createElement('div');
    updateBanner.id = 'pwa-update-banner';
    updateBanner.innerHTML = `
        <div style="
            position: fixed;
            bottom: 20px;
            left: 20px;
            right: 20px;
            background: #2e7d32;
            color: white;
            padding: 16px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10000;
            font-family: Arial, sans-serif;
        ">
            <p style="margin: 0 0 12px 0; font-weight: bold;">
                ✨ Nueva versión disponible
            </p>
            <div style="display: flex; gap: 8px;">
                <button id="update-now-btn" style="
                    background: white;
                    color: #2e7d32;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-weight: bold;
                ">Actualizar</button>
                <button id="update-later-btn" style="
                    background: transparent;
                    color: white;
                    border: 1px solid white;
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                ">Luego</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(updateBanner);

    document.getElementById('update-now-btn').addEventListener('click', () => {
        if (registration.waiting) {
            registration.waiting.postMessage({type: 'SKIP_WAITING'});
            window.location.reload();
        }
    });

    document.getElementById('update-later-btn').addEventListener('click', () => {
        updateBanner.remove();
    });
}

// 3. MUESTRA PROGRESO DE INSTALACIÓN
function showInstallProgress(cached, total, failed = 0, percentage = 0) {
    const finalPercentage = Math.round((cached / total) * 100);
    console.log(`⏳ Progreso: ${finalPercentage}% (${cached}/${total} descargados${failed > 0 ? `, ${failed} fallos` : ''})`);
    
    // Aquí puedes actualizar un indicador visual en la UI
    const progressEvent = new CustomEvent('pwa-install-progress', {
        detail: { cached, total, failed, percentage: finalPercentage }
    });
    window.dispatchEvent(progressEvent);
}

// 4. PROMPT DE INSTALACIÓN NATIVA
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('📲 beforeinstallprompt disparado - app es instalable');
    
    // Evita que el navegador muestre el prompt automáticamente
    e.preventDefault();
    deferredPrompt = e;

    // Muestra un botón personalizado para instalar
    showInstallButton();
});

function showInstallButton() {
    // Si ya existe un botón de instalación, no lo duplica
    if (document.getElementById('install-pwa-btn')) return;

    const installBtn = document.createElement('button');
    installBtn.id = 'install-pwa-btn';
    installBtn.innerHTML = '📲 Instalar Áurea';
    installBtn.style.cssText = `
        position: fixed;
        top: 60px;
        right: 20px;
        background: #2e7d32;
        color: white;
        border: none;
        padding: 10px 16px;
        border-radius: 24px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 9999;
    `;

    document.body.appendChild(installBtn);

    installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const {outcome} = await deferredPrompt.userChoice;
            console.log(`Usuario eligió: ${outcome}`);
            deferredPrompt = null;
            installBtn.remove();
        }
    });
}

window.addEventListener('appinstalled', () => {
    console.log('✅ PWA instalada exitosamente');
    deferredPrompt = null;
    
    // Remueve el botón de instalación si existe
    const btn = document.getElementById('install-pwa-btn');
    if (btn) btn.remove();
});

// =====================================================
// FUNCIONALIDADES ORIGINALES
// =====================================================

function setupFooterLinks() {
    const currentPath = window.location.pathname;
    console.log(currentPath);
    const footerLinks = document.querySelectorAll('.footer-link');

    footerLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        const linkPath = new URL(href, window.location.origin).pathname;
        const normalizedHref = linkPath !== '/' ? linkPath.replace(/\/$/, '') : linkPath;
        const normalizedPath = currentPath !== '/' ? currentPath.replace(/\/$/, '') : currentPath;

        if (
            normalizedHref === normalizedPath ||
            normalizedPath.startsWith(normalizedHref + '/') ||
            link.href === window.location.href
        ) {
            link.classList.add('active');
        }
    });
}

// 5. MANEJO DE ACTUALIZACIONES CONTROLLER
navigator.serviceWorker?.addEventListener('controllerchange', () => {
    console.log('🔄 Nuevo Service Worker tomó control - recargando...');
    window.location.reload();
});

