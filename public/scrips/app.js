// Obtiene la URL actual de la barra de direcciones
const currentPath = window.location.pathname;
console.log(currentPath);
// Busca todos los enlaces del navegador
const footerLinks = document.querySelectorAll('.footer-link');

footerLinks.forEach(link => {
  // Si el href del enlace coincide con la ruta actual...
  if (link.getAttribute('href') === currentPath || link.href === window.location.href) {
    link.classList.add('active');
  }
});

