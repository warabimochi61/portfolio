'use strict';
const router = Object.seal({
  
  previousHashes: [],

  handle() {
    if (router.normalizeHash()) return;

    const segments = utils.getHashes();

    if (router.isSamePath(segments, router.previousHashes)) return;

    if (!segments[0]) {
      window.location.replace('#bookmark');
      return;
    }

    routes.renderer(segments, router.previousHashes);
    routes.rendererContens(segments);

    router.updateActiveSidebar();

    router.previousHashes = [...segments];
  },

  normalizeHash() {
    let hash = window.location.hash;

    hash = hash.replace(/^#\/+/, '#');

    hash = hash.replace(/\/{2,}/g, '/');

    hash = hash.replace(/\/+$/, '');

    if (window.location.hash !== hash) {
      window.location.replace(hash);
      return true;
    }

    return false;
  },

  isSamePath(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      return false;
    }

    if (arr1.length !== arr2.length) {
      return false;
    }

    return arr1.every((segment, index) => {
      return segment === arr2[index];
    });
  },

  updateActiveSidebar() {
    const activeItems = sidebarContainerEl.querySelectorAll('.is-active');
    activeItems.forEach((item) => item.classList.remove('is-active'));

    const targetItem = sidebarContainerEl.querySelector(`[data-url='${window.location.hash}']`);

    if (targetItem) {
      targetItem.classList.add('is-active');
    }
  },
});