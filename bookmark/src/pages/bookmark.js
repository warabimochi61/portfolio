'use strict';
const bookmark = Object.freeze({
  render() { 
    layout.render('bookmark');

    sidebarContainerEl.replaceChildren(create.sidebar(BOOKMARK_DATA?.sidebar));

    function onSearchInput() {
      const searchText = searchInputEl.value;
      searchClearEl.classList.toggle('is-show', searchText !== '');
      bookmark.renderContent();
    }

    function onSearchClear() {
      searchInputEl.value = '';
      searchClearEl.classList.remove('is-show');
      bookmark.renderContent();
    }

    searchInputEl.addEventListener('input', onSearchInput);
    searchClearEl.addEventListener('click', onSearchClear);

    return () => {
      searchInputEl.removeEventListener('input', onSearchInput);
      searchClearEl.removeEventListener('click', onSearchClear);
    };
  },

  renderContent() {
    const segments = utils.getHashes();
    const categoryId = segments[1] ?? '';
    const searchText = searchInputEl.value.trim();

    if (segments.length === 1 || segments.length === 2) {
      const element = bookmark.create(BOOKMARK_DATA?.bookmark, categoryId, searchText);
      mainContainerEl.replaceChildren(element);
    } else {
      mainContainerEl.replaceChildren(bookmark.createError('BOOKMARK_CATEGORY_NOT_FOUND'));
    }
  },

  // クリエイト
  create(data, categoryId, searchText) {
    const categories = bookmark.getCategories(data, categoryId);

    if (!categories) {
      return bookmark.createError('BOOKMARK_CATEGORY_NOT_FOUND');
    }
    
    if (searchText) {
      const searchResults = bookmark.getSearches(categories, searchText);

      if (!searchResults) {
        return bookmark.createError('BOOKMARK_NO_SEARCH_RESULTS');
      }

      return bookmark.createSearch(searchResults);
    }

    return bookmark.createCategory(categories);
  },

  createCategory(categories) {
    const fragment = document.createDocumentFragment();

    categories.forEach((category) => {
      const headingEl = document.createElement('h1');
      headingEl.className = 'p-bookmark-heading';
      headingEl.textContent = category?.title ?? '';

      fragment.append(headingEl);

      category?.items.forEach((item) => {
        fragment.append(bookmark.createCard(item));
      });
    });

    return fragment;
  },

  createSearch(items) {
    const fragment = document.createDocumentFragment();

    items.forEach((item) => {
      fragment.append(bookmark.createCard(item));
    });

    return fragment;
  },

  createCard(item) {
    const cardEl = document.createElement('button');
    cardEl.className = 'p-bookmark-card';

    cardEl.dataset.url = item.url;

    if (item.blank) {
      cardEl.dataset.urlBlank = 'true';
    }

    const imgWrapEl = document.createElement('div');
    imgWrapEl.className = 'p-bookmark-card-img-wrap';
    
    if (item.thumbnail) {
      const imgEl = document.createElement('img');
      imgEl.src = item.thumbnail;
      imgEl.loading = 'lazy';
      imgEl.onerror = function() { this.style.visibility = 'hidden'; }; 
      imgWrapEl.append(imgEl);
    }

    const titleEl = document.createElement('h1');
    titleEl.className = 'p-bookmark-card-title';
    titleEl.textContent = item.title ?? '';

    const descriptionEl = document.createElement('div');
    descriptionEl.className = 'p-bookmark-card-description';
    descriptionEl.textContent = item.description ?? '';

    
    cardEl.append(imgWrapEl, titleEl, descriptionEl);

    return cardEl;
  },

  createError(code) {
    const messageEl = document.createElement('h1');
    messageEl.className = 'p-bookmark-error-message';
    messageEl.textContent = utils.ERROR_MESSAGES?.[code] ?? 'エラーが発生しました';
    return messageEl;
  },

  getCategories(data, categoryId) {
    if (categoryId === '') {
      return data.flatMap((bookmark) => bookmark.subCategories ?? null);
    }

    const found = data.find((bookmark) => bookmark.categoryId === categoryId);
    return found?.subCategories ?? null;
  },

  getSearches(target, searchText) {
    const searchWord = utils.normalizeKana(searchText);
    const result = [];
    
    target.forEach((category) => {
      category.items?.forEach((item) => {
        const title = utils.normalizeKana(item.title);
        const description = utils.normalizeKana(item.description);
        
        if (title.includes(searchWord) || description.includes(searchWord)) {
          result.push(item);
        }
      });
    });
    
    return result.length === 0 ? null : result;
  },
});