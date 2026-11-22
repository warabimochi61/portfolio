'use strict';
const headerTitleEl = document.getElementById('js-header-title');
const sidebarEl = document.getElementById('js-sidebar');
const sidebarContainerEl = document.getElementById('js-sidebar-container');
const mainContainerEl = document.getElementById('js-main-container');

const searchEl = document.getElementById('js-header-search');
const searchInputEl = document.getElementById('js-header-search-input');
const searchClearEl = document.getElementById('js-header-search-clear');

const utils = Object.freeze({
  // ハッシュ値の取得
  getHashes() {
    return window.location.hash.slice(1).split('/');
  },

  normalizeKana(str) {
    return (str ?? '')
      .normalize('NFKC')
      .toLowerCase()
      .replace(/[\u30a1-\u30f6]/g, (char) =>
        String.fromCharCode(char.charCodeAt(0) - 0x60)
      );
  },

  ERROR_MESSAGES: Object.freeze({
    NOT_FOUND: 'ページが見つかりません',
    BOOKMARK_CATEGORY_NOT_FOUND: 'カテゴリーが見つかりません',
    BOOKMARK_NO_SEARCH_RESULTS: '検索結果がありません',
  }),
});