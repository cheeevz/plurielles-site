/*
  Plurielles — moteur du site
  ---------------------------------------------------------------
  Ce fichier ne contient que la logique : en principe on n'y touche plus.
    - Réglages communs (logo, menu, couleurs) : config.js
    - Contenu et photo de chaque page        : pages/<nom-de-la-page>.js
    - Apparence                              : styles.css

  Chargé depuis Site Creator (Design > Autres paramètres > Code personnalisé) :

  <script>
    (function () {
      var s = document.createElement('script');
      s.src = 'https://cheeevz.github.io/plurielles-site/core.js?v=' + Date.now();
      document.head.appendChild(s);
    })();
  </script>
*/
(function () {
  if (window.Plurielles) return; // déjà chargé

  // Dossier du repo + version (reprise de l'URL de core.js pour éviter le cache)
  var me = document.currentScript;
  var src = me ? me.src : '';
  var BASE = src.replace(/core\.js.*$/, '');
  var VERSION = (src.split('?v=')[1] || Date.now());

  var config = null;
  var page = null;

  // Les fichiers config.js et pages/*.js appellent ces deux fonctions
  window.Plurielles = {
    config: function (c) { config = c; },
    page: function (p) { page = p; }
  };

  /* ---------- Utilitaires ---------- */

  function url(file) { return BASE + file + '?v=' + VERSION; }

  function loadScript(file) {
    return new Promise(function (resolve) {
      var s = document.createElement('script');
      s.src = url(file);
      s.charset = 'utf-8'; // accents corrects quel que soit le serveur
      s.onload = function () { resolve(true); };
      s.onerror = function () { resolve(false); }; // page sans fichier : simple bandeau
      document.head.appendChild(s);
    });
  }

  function loadCss(href) {
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = href;
    document.head.appendChild(l);
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function domReady() {
    return new Promise(function (resolve) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', resolve);
      } else {
        resolve();
      }
    });
  }

  /* ---------- Quelle page ? ---------- */

  var path = window.location.pathname;
  var key = path.replace(/\.php$/, '').replace(/\/$/, '');   // '/hommage'
  var isHome = key === '' || key === '/index';
  var slug = isHome ? 'accueil' : key.replace(/^\//, '').replace(/\//g, '-');

  /* ---------- Construction ---------- */

  function buildMenu(items, cls) {
    var ul = el('ul', cls);
    items.forEach(function (it) {
      var li = el('li');
      var a = el('a', null, it.label);
      a.href = it.href;
      if (key === it.href || key.indexOf(it.href + '/') === 0) a.className = 'is-active';
      li.appendChild(a);
      ul.appendChild(li);
    });
    return ul;
  }

  function buildHeader() {
    var hero = el('section', 'flo-hero');
    hero.style.setProperty('--flo-logo-w', config.logo.width);
    hero.style.setProperty('--flo-logo-w-m', config.logo.widthMobile);
    hero.style.setProperty('--flo-logo-y', config.logo.offset);

    if (page && page.fullscreen) {
      // Accueil : photo plein écran
      hero.classList.add('flo-full');
      hero.style.backgroundImage = "url('" + page.image + "')";
      hero.style.backgroundPosition = 'center ' + (page.position || '50%');
    } else if (page && page.image && page.layout !== 'split') {
      // Page avec bannière photo
      hero.classList.add('flo-banner');
      var bg = el('div', 'flo-bg');
      var focus = (page.positionX || '50%') + ' ' + (page.position || '50%');
      bg.style.backgroundImage = "url('" + page.image + "')";
      bg.style.backgroundPosition = focus;
      bg.style.transformOrigin = focus;
      bg.style.transform = 'scale(' + (page.zoom || 1) + ')';
      hero.appendChild(bg);

      if (page.title) {
        var h1 = el('h1', 'flo-title');
        h1.appendChild(el('span', 'flo-title-brand', 'Plurielles'));
        h1.appendChild(el('span', 'flo-title-page', page.title));
        hero.appendChild(h1);
      }
    } else {
      // Page sans photo en bannière : simple bandeau
      // (couleurs propres à la page si elle définit « header », sinon celles de config.js)
      var bar = (page && page.header) || config.bar;
      hero.classList.add('flo-bar');
      hero.style.backgroundColor = bar.background;
      hero.style.setProperty('--flo-text', bar.textColor);
    }

    var nav = el('nav', 'flo-nav');
    nav.setAttribute('aria-label', 'Navigation principale');

    var logo = el('a', 'flo-logo');
    logo.href = '/';
    var img = el('img');
    img.src = (page && page.logoImage) || config.logo.image;
    img.alt = 'Plurielles';
    logo.appendChild(img);

    nav.appendChild(buildMenu(config.menu.left, 'flo-left'));
    nav.appendChild(logo);
    nav.appendChild(buildMenu(config.menu.right, 'flo-right'));
    hero.appendChild(nav);

    var burger = el('button', 'flo-burger', 'Menu');
    burger.type = 'button';
    burger.addEventListener('click', function () {
      var open = hero.classList.toggle('is-open');
      burger.textContent = open ? 'Fermer' : 'Menu';
    });
    hero.appendChild(burger);

    return hero;
  }

  // Mise en page « photo à gauche, texte à droite » (ex. À propos)
  function buildSplit() {
    document.body.classList.add('flo-has-content');
    var wrap = el('section', 'flo-split');

    var photo = el('div', 'flo-split-photo');
    photo.style.backgroundImage = "url('" + page.image + "')";
    photo.style.backgroundPosition = (page.positionX || '50%') + ' ' + (page.position || '50%');
    wrap.appendChild(photo);

    var text = el('div', 'flo-split-text');
    (page.sections || []).forEach(function (sec) {
      var block = el('div', 'flo-section');
      if (sec.title) block.appendChild(el('h2', 'flo-section-title', sec.title));
      (sec.text || []).forEach(function (t) { block.appendChild(el('p', null, t)); });
      text.appendChild(block);
    });
    wrap.appendChild(text);
    return wrap;
  }

  function buildContent() {
    if (page && page.layout === 'split') return buildSplit();
    if (!page || !(page.intro || page.prices || page.note)) return null;
    document.body.classList.add('flo-has-content');

    var content = el('section', 'flo-content');

    if (page.intro) {
      var intro = el('div', 'flo-intro');
      page.intro.forEach(function (t) { intro.appendChild(el('p', null, t)); });
      content.appendChild(intro);
    }

    if (page.prices) {
      if (page.menuTitle) content.appendChild(el('h2', 'flo-menu-title', page.menuTitle));
      var ul = el('ul', 'flo-prices');
      page.prices.forEach(function (it) {
        var li = el('li');
        li.appendChild(el('span', 'flo-label', it.label));
        li.appendChild(el('span', 'flo-dots'));
        li.appendChild(el('span', 'flo-price', it.price));
        ul.appendChild(li);
      });
      content.appendChild(ul);
    }

    if (page.note) content.appendChild(el('p', 'flo-note', page.note));

    return content;
  }

  /* ---------- Lancement ---------- */

  loadCss(url('styles.css'));
  loadCss('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,400;1,400&family=DM+Sans:wght@400;500;600&family=Gloock&display=swap');

  Promise.all([loadScript('config.js'), loadScript('pages/' + slug + '.js'), domReady()])
    .then(function (res) {
      if (!res[0] || !config) {
        console.error('[Plurielles] config.js introuvable ou invalide');
        return;
      }
      if (document.querySelector('.flo-hero')) return;

      if (config.themeHeader) {
        var hide = el('style');
        hide.textContent = config.themeHeader + '{display:none !important;}';
        document.head.appendChild(hide);
      }

      var hero = buildHeader();
      document.body.insertBefore(hero, document.body.firstChild);

      var content = buildContent();
      if (content) hero.parentNode.insertBefore(content, hero.nextSibling);
    });
})();
