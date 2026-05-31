document.addEventListener('DOMContentLoaded', () => {
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
});

