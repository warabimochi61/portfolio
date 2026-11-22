'use strict';
const routes = Object.seal({

  pageCleanup: null,

  renderer(segments, previousHashes) {
    if (segments[0] === previousHashes[0]) return;

    if (routes.pageCleanup) {
      routes.pageCleanup();
      routes.pageCleanup = null;
    }

    if (segments[0] === 'bookmark') {
      routes.pageCleanup = bookmark.render();
    } else {
      routes.pageCleanup = error.render('NOT_FOUND');
    }
  },

  rendererContens(segments) {
    if (segments[0] === 'bookmark') {
      bookmark.renderContent();
    }
  },
});