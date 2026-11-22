'use strict';
const layout = Object.freeze({
  render(page) {
    const config = layout.CONFIGS[page];

    document.body.className = config.layout;

    headerTitleEl.textContent = config.headerTitle;

    searchEl.style.display = config.search ? '' : 'none';

    if (config.sidebar) {
      sidebarEl.style.display = '';
    } else {
      sidebarEl.style.display = 'none';
      sidebarContainerEl.replaceChildren('');
    }

    mainContainerEl.className = config.mainClass;
  },

  CONFIGS: {
    error: {
      layout: 'l-1column',
      headerTitle: 'Web26',
      search: false,
      sidebar: false,
      mainClass: 'l-main-container p-error-container',
    },
    bookmark: {
      layout: 'l-2column',
      headerTitle: 'ブックマーク',
      search: true,
      sidebar: true,
      mainClass: 'l-main-container p-bookmark-container',
    },
  },
});

const error = Object.freeze({
  render(code) {
    layout.render('error');

    const messageEl = document.createElement('h1');
    messageEl.className = 'p-error-message';
    messageEl.textContent = utils.ERROR_MESSAGES?.[code] ?? '';

    mainContainerEl.replaceChildren(messageEl);
  },
});