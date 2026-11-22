'use strict';
const BOOKMARK_DATA = {
  "sidebar": [
    {
      "title": "すべて",
      "url": "#bookmark",
      "icon": "home"
    },
    {
      "title": "飛行機",
      "url": "#bookmark/aircraft",
      "icon": "aircraft"
    },
    {
      "title": "プログラム",
      "url": "#bookmark/program",
      "icon": "code"
    },
    {
      "title": "PC",
      "url": "#bookmark/pc",
      "icon": "memory"
    },
    {
      "title": "テレビ",
      "url": "#bookmark/tv",
      "icon": "tv"
    }
  ],
  "bookmark": [
    {
      "categoryId": "aircraft",
      "categoryTitle": "飛行機",
      "subCategories": [
        {
          "title": "追跡・データ",
          "items": [
            {"title": "Flightradar24", "description": "", "url": "https://www.flightradar24.com/35.19,136.93/8", "thumbnail": "assets/icon/document.png", "blank": true},
            {"title": "Flightradar24追跡", "description": "", "url": "https://www.flightradar24.com/data/", "thumbnail": "assets/icon/document.png", "blank": true},
            {"title": "ADS-B", "description": "フライトレーダー", "url": "https://globe.adsbexchange.com/", "thumbnail": "assets/icon/document.png", "blank": true},
            {"title": "FlightAware", "description": "フライト履歴", "url": "https://ja.flightaware.com/", "thumbnail": "assets/icon/document.png", "blank": true},
            {"title": "本邦航空会社機材一覧サイト", "description": "", "url": "https://ja-fleet.noobow.me/", "thumbnail": "assets/icon/document.png", "blank": true}
          ]
        },
        {
          "title": "空港",
          "items": [
            {"title": "Flightsfrom", "description": "就航空港一覧", "url": "https://www.flightsfrom.com/HND", "thumbnail": "assets/icon/document.png", "blank": true},
            {"title": "wiki地域別空港ランキング", "description": "", "url": "assets/icon/document.png", "thumbnail": "assets/icon/document.png", "blank": true}
          ]
        },
      ]
    },
    {
      "categoryId": "program",
      "categoryTitle": "プログラム",
      "subCategories": [
        {
          "title": "ウェブサイト",
          "items": [
            {"title": "ラッコツールズ", "description": "", "url": "https://rakko.tools/ja/tags/programming", "thumbnail": "assets/icon/document.png", "blank": true}
          ]
        },
        {
          "title": "HTML",
          "items": [
            {"title": "Codejump", "description": "HTML練習サイト", "url": "https://code-jump.com/", "thumbnail": "assets/icon/document.png", "blank": true}
          ]
        },
        {
          "title": "CSS",
          "items": [
            {"title": "A (more) Modern CSS Reset", "description": "リセットCSS", "url": "https://piccalil.li/blog/a-more-modern-css-reset/", "thumbnail": "assets/icon/document.png", "blank": true},
            {"title": "Josh's Custom CSS Reset", "description": "リセットCSS", "url": "https://www.joshwcomeau.com/css/custom-css-reset/", "thumbnail": "assets/icon/document.png", "blank": true},
            {"title": "Destyle.css", "description": "リセットCSS", "url": "https://nicolas-cusan.github.io/destyle.css/", "thumbnail": "assets/icon/document.png", "blank": true}
          ]
        },
        {
          "title": "JavaScript",
          "items": [
            {"title": "JavaScript入門書", "description": "", "url": "https://jsprimer.net/", "thumbnail": "assets/icon/document.png", "blank": true},
          ]
        },
        {
          "title": "アイコン",
          "items": [
            {"title": "Google Fonts", "description": "アイコン", "url": "https://fonts.google.com/icons", "thumbnail": "assets/icon/document.png", "blank": true},
            {"title": "iconify", "description": "アイコン", "url": "https://icon-sets.iconify.design/", "thumbnail": "assets/icon/document.png", "blank": true}
          ]
        }
      ]
    },
    {
      "categoryId": "pc",
      "categoryTitle": "デザイン",
      "subCategories": [
        {
          "title": "ツール",
          "items": [
            {"title": "DeepL翻訳", "description": "", "url": "https://www.deepl.com/ja/translator", "thumbnail": "assets/icon/document.png", "blank": true},
            {"title": "RGB･HSL変換", "description": "", "url": "https://www.peko-step.com/tool/hslrgb.html", "thumbnail": "assets/icon/document.png", "blank": true},
            {"title": "カタカナ英語翻訳", "description": "", "url": "https://linnk.ai/ja/tools/katakana-english-translator/", "thumbnail": "assets/icon/document.png", "blank": true},
            {"title": "ヘボン式 変換", "description": "", "url": "https://lazesoftware.com/ja/tool/hepburn/", "thumbnail": "assets/icon/document.png", "blank": true},
          ]
        },
        {
          "title": "インフラ",
          "items": [
            {"title": "downdetector", "description": "現在発生中の障害", "url": "https://downdetector.jp/", "thumbnail": "assets/icon/document.png", "blank": true}
          ]
        }
      ]
    },
    {
      "categoryId": "tv",
      "categoryTitle": "テレビ",
      "subCategories": [
        {
          "title": "ウェブサイト",
          "items": [
            {"title": "NHK", "description": "", "url": "https://www.nhk.or.jp/", "thumbnail": "assets/icon/document.png", "blank": true},
            {"title": "TVer", "description": "", "url": "https://tver.jp/", "thumbnail": "assets/icon/document.png", "blank": true},
            {"title": "視聴率", "description": "", "url": "https://tval-now.switch-m.com/", "thumbnail": "assets/icon/document.png", "blank": true}
          ]
        }
      ]
    }
  ]
}