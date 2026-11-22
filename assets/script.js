const BOOKMARK_DATA = {
  aircraft: [
    {
      url: 'https://www.flightradar24.com/35.94,139.42/8',
      title: 'Flightradar24'
    },
    {
      url: 'https://x.com/APInfo_bot',
      title: '航空情報 AirPlaneInformation'
    },
  ],
  bus: [
    {
      url: 'https://www.rosenzu.com/~sbm/maps.html#12.75/35.1586/136.8990',
      title: 'シームレスバス路線図'
    },
  ],
  jma: [
    {
      url: 'https://www.jma.go.jp/bosai/risk/',
      title: '気象庁 キキクル'
    },
    {
      url: 'https://www.data.jma.go.jp/multi/quake/index.html?lang=jp',
      title: '気象庁 地震情報'
    },
    {
      url: 'https://www.jma.go.jp/bosai/map.html',
      title: '気象庁 天気予報'
    },
  ],
};

const bookmarkButtonsEl = document.querySelectorAll('[data-bookmark-nav]');
const bookmarkContentsEl = document.getElementById('js-bookmark-contents');

function renderBookmark(key) {
  const data = BOOKMARK_DATA[key];

  if (!data) {
    messageEl = document.createElement('h2');
    messageEl.textContent = 'データが見つかりません';
    bookmarkContentsEl.appendChild(messageEl);
    return;
  }

  bookmarkButtonsEl.forEach(button => {
    button.classList.toggle('is-active', button.dataset.bookmarkNav === key);
  });

  // 初期化
  bookmarkContentsEl.replaceChildren();

  const fragment = document.createDocumentFragment();

  data.forEach(item => {
    const cardEl = document.createElement('a');

    cardEl.href = item.url;
    cardEl.className = 'bookmark-item';
    cardEl.textContent = item.title;

    fragment.appendChild(cardEl);
  });

  bookmarkContentsEl.appendChild(fragment);
}

// イベント
bookmarkButtonsEl.forEach(button => {
  button.addEventListener('click', () => {
    renderBookmark(button.dataset.bookmarkNav);
  });
});

// 初期表示
renderBookmark('aircraft');