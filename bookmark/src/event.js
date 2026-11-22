'use strict';
window.addEventListener('hashchange', router.handle);
window.addEventListener('DOMContentLoaded', router.handle);

document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-url]');
  if (!target) return;

  const url = target.dataset.url;
  if (!url) return;
  
  const isBlank = target.dataset.urlBlank === 'true';
  
  if (isBlank) {
    window.open(url, '_blank', 'noopener');
  } else {
    window.location.href = url;
  }
});