(function () {
  var STORAGE_KEY = "ensoh-lang";
  var SUPPORTED = ["en", "ja", "zh-Hant"];

  function getPreferred() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var nav = (navigator.language || "en").toLowerCase();
    if (nav.indexOf("zh") === 0) return "zh-Hant";
    if (nav.indexOf("ja") === 0) return "ja";
    return "en";
  }

  function t(lang, path) {
    var parts = path.split(".");
    var cur = window.ENSOH_I18N[lang] || window.ENSOH_I18N.en;
    for (var i = 0; i < parts.length; i++) {
      if (!cur) return path;
      cur = cur[parts[i]];
    }
    return cur == null ? path : cur;
  }

  function apply(lang) {
    var dict = window.ENSOH_I18N[lang] || window.ENSOH_I18N.en;
    document.documentElement.lang = dict.meta.lang;
    document.body.setAttribute("data-lang", lang);
    document.title = dict.meta.title;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = t(lang, key);
      if (Array.isArray(val)) return;
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(lang, el.getAttribute("data-i18n-html"));
    });

    document.querySelectorAll("[data-i18n-href]").forEach(function (el) {
      el.setAttribute("href", t(lang, el.getAttribute("data-i18n-href")));
    });

    document.querySelectorAll("[data-i18n-tags]").forEach(function (el) {
      var tags = t(lang, el.getAttribute("data-i18n-tags"));
      if (!Array.isArray(tags)) return;
      el.innerHTML = tags.map(function (tag) {
        return "<span>" + tag + "</span>";
      }).join("");
    });

    document.querySelectorAll(".lang-switcher button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (toggle && links) {
      toggle.addEventListener("click", function () {
        var open = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      links.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          links.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }
    var header = document.querySelector(".site-header");
    if (header) {
      var onScroll = function () {
        header.classList.toggle("scrolled", window.scrollY > 8);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var lang = getPreferred();
    apply(lang);
    initNav();
    document.querySelectorAll(".lang-switcher button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(btn.getAttribute("data-lang"));
      });
    });
  });

  window.ENSOH = { setLang: apply, getLang: getPreferred };
})();
