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
      // Accueil : plein écran, une photo ou plusieurs côte à côte
      hero.classList.add('flo-full');
      if (page.images && page.images.length) {
        hero.classList.add('flo-full-split');
        page.images.forEach(function (im) {
          var cell = el('div', 'flo-full-img');
          if (im.background) cell.style.backgroundColor = im.background;
          var pic = el('div', 'flo-full-img-pic');
          var focus = (im.positionX || '50%') + ' ' + (im.position || '50%');
          pic.style.backgroundImage = "url('" + im.url + "')";
          pic.style.backgroundPosition = focus;
          pic.style.transformOrigin = focus;
          pic.style.transform = 'scale(' + (im.zoom || 1) + ')';
          cell.appendChild(pic);
          hero.appendChild(cell);
        });
      } else {
        hero.style.backgroundImage = "url('" + page.image + "')";
        hero.style.backgroundPosition = 'center ' + (page.position || '50%');
      }
    } else if (page && page.image && !page.layout) {
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
    // Menu et logo blancs uniquement sur l'accueil, foncés partout ailleurs
    var isLight = !(page && page.fullscreen);
    if (isLight) {
      hero.classList.add('flo-dark');
      hero.style.setProperty('--flo-text', config.bar.textColor);
    }

    // Papillon (couleurs d'origine, jamais assombri)
    if (config.logo.symbol) {
      var sym = el('img', 'flo-logo-symbol');
      sym.src = config.logo.symbol;
      sym.alt = '';
      logo.appendChild(sym);
    }

    // Typo « Plurielles », posée par-dessus le papillon
    var typo = el('img', config.logo.symbol ? 'flo-logo-typo' : null);
    if (page && page.logoImage) {
      typo.src = page.logoImage;
    } else if (isLight && config.logo.imageDark) {
      typo.src = config.logo.imageDark;           // version foncée fournie
    } else {
      typo.src = config.logo.image;
      if (isLight) logo.classList.add('flo-logo-dark'); // sinon : assombrie en CSS
    }
    typo.alt = 'Plurielles';
    if (config.logo.typoScale) typo.style.width = (config.logo.typoScale * 100) + '%';
    if (config.logo.typoOffset) typo.style.marginTop = config.logo.typoOffset;
    logo.appendChild(typo);

    nav.appendChild(buildMenu(config.menu.left, 'flo-left'));
    nav.appendChild(logo);
    nav.appendChild(buildMenu(config.menu.right, 'flo-right'));

    // Sous-titre sous le logo (ex. « Studio floral »), placé par rapport à la ligne du menu
    if (page && page.logoSubtitle) {
      nav.appendChild(el('span', 'flo-logo-subtitle', page.logoSubtitle));
      if (page.logoSubtitleGap) nav.style.setProperty('--flo-sub-gap', page.logoSubtitleGap);
    }
    // Réglé sur l'en-tête (et non sur le menu) pour que l'état « après défilement » puisse le modifier
    if (config.logo.navTop) hero.style.setProperty('--flo-nav-top', config.logo.navTop);
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

  // Mise en page Contact : infos + image à gauche, formulaire Site Creator à droite
  var inEditor = window.self !== window.top;
  var formMissing = false;

  function buildContact() {
    document.body.classList.add('flo-has-content');
    var wrap = el('section', 'flo-contact');

    var left = el('div', 'flo-contact-left');
    var info = el('div', 'flo-contact-info');
    if (page.title) info.appendChild(el('h2', 'flo-section-title', page.title));
    (page.text || []).forEach(function (t) { info.appendChild(el('p', 'flo-contact-text', t)); });
    if (page.email) {
      var mail = el('a', 'flo-contact-link', page.email);
      mail.href = 'mailto:' + page.email;
      var pm = el('p'); pm.appendChild(mail); info.appendChild(pm);
    }
    (page.links || []).forEach(function (l) {
      var a = el('a', 'flo-contact-link', l.label);
      a.href = l.url;
      a.target = '_blank';
      a.rel = 'noopener';
      var pl = el('p'); pl.appendChild(a); info.appendChild(pl);
    });
    left.appendChild(info);

    if (page.image) {
      var img = el('img', 'flo-contact-img');
      img.src = page.image;
      img.alt = page.imageAlt || '';
      left.appendChild(img);
    }
    wrap.appendChild(left);

    // Colonne de droite : on y déplace le formulaire de Site Creator
    var right = el('div', 'flo-contact-form');
    var form = page.formSelector ? document.querySelector(page.formSelector) : null;
    if (form && !inEditor) {
      right.appendChild(form);
    } else if (page.formSelector) {
      // Un formulaire est attendu mais introuvable : on ne masque rien pour ne pas le perdre
      formMissing = true;
      if (!inEditor) console.warn('[Plurielles] formulaire introuvable :', page.formSelector);
    }
    wrap.appendChild(right);
    return wrap;
  }

  // Accueil : texte de présentation sous les photos
  function buildHome() {
    document.body.classList.add('flo-home');
    var section = el('section', 'flo-home-intro');
    var col = el('div', 'flo-home-col');
    (page.statement || []).forEach(function (t) { col.appendChild(el('p', 'flo-home-statement', t)); });
    if (page.text && page.text.length) {
      var small = el('div', 'flo-home-text');
      page.text.forEach(function (t) { small.appendChild(el('p', null, t)); });
      col.appendChild(small);
    }
    section.appendChild(col);
    return section;
  }

  // Mise en page « blocs » : une suite de blocs (titre, texte, frise, grand texte, prestations)
  // décrite dans le fichier de la page. Réutilisable pour toutes les nouvelles pages.
  function photo(url, cls) {
    var d = el('div', cls);
    if (url) d.style.backgroundImage = "url('" + url + "')";
    return d;
  }

  // Frise : défilement horizontal à la molette/au pavé tactile, et par glisser à la souris
  function buildStrip(b) {
    var strip = el('div', 'flo-b-strip');
    if (b.height) strip.style.setProperty('--flo-strip-h', b.height);
    if (b.ratio) strip.style.setProperty('--flo-strip-ratio', b.ratio);
    (b.images || []).forEach(function (url) { strip.appendChild(photo(url, 'flo-b-strip-img')); });

    var down = false, startX = 0, startScroll = 0, moved = false;
    strip.addEventListener('mousedown', function (e) {
      down = true; moved = false; startX = e.pageX; startScroll = strip.scrollLeft;
      strip.classList.add('is-dragging');
    });
    window.addEventListener('mouseup', function () { down = false; strip.classList.remove('is-dragging'); });
    strip.addEventListener('mousemove', function (e) {
      if (!down) return;
      var dx = e.pageX - startX;
      if (Math.abs(dx) > 3) moved = true;
      strip.scrollLeft = startScroll - dx;
      e.preventDefault();
    });
    strip.addEventListener('click', function (e) { if (moved) e.preventDefault(); }, true);
    return strip;
  }

  function buildServices(b) {
    var grid = el('div', 'flo-b-services');
    (b.items || []).forEach(function (it, i) {
      var card = el('div', 'flo-b-service');
      if (it.col) card.style.gridColumn = it.col;
      card.appendChild(el('span', 'flo-b-service-num', it.num || ('00' + (i + 1)).slice(-3)));
      card.appendChild(el('h3', 'flo-b-service-title', it.title));
      card.appendChild(photo(it.image, 'flo-b-service-img'));
      if (it.text) card.appendChild(el('p', 'flo-b-service-text', it.text));
      grid.appendChild(card);
    });
    return grid;
  }

  // Vidéo en lecture automatique (muette, obligatoire pour les navigateurs),
  // avec un bouton pour activer le son. Option : « audio » = piste sonore séparée
  // (ex. chants d'oiseaux) jouée à la place du son de la vidéo.
  function buildVideo(b) {
    var box = el('div', 'flo-b-video');
    var v = el('video');
    v.src = b.video;
    if (b.poster) v.poster = b.poster;
    v.autoplay = true; v.muted = true; v.loop = true; v.playsInline = true;
    v.setAttribute('playsinline', '');
    v.setAttribute('muted', '');
    box.appendChild(v);

    if (b.sound !== false) {
      var audio = null;
      if (b.audio) { audio = el('audio'); audio.src = b.audio; audio.loop = true; box.appendChild(audio); }
      var btn = el('button', 'flo-b-video-sound', 'Son : off');
      btn.type = 'button';
      btn.addEventListener('click', function () {
        var on;
        if (audio) {
          on = audio.paused;
          if (on) { audio.currentTime = v.currentTime % (audio.duration || 1e9); audio.play(); } else { audio.pause(); }
        } else {
          v.muted = !v.muted; on = !v.muted;
        }
        btn.textContent = on ? 'Son : on' : 'Son : off';
      });
      box.appendChild(btn);
    }
    return box;
  }

  // Bloc « collage » : photos entières placées librement (positions en % de la largeur d'écran)
  function buildCollage(b) {
    var box = el('div', 'flo-b-collage');
    if (b.height) box.style.setProperty('--flo-collage-h', b.height);
    (b.items || []).forEach(function (it) {
      var img = el('img', 'flo-b-collage-img');
      img.src = it.image;
      img.alt = it.alt || '';
      img.loading = 'lazy';
      img.style.left = it.x + 'vw';
      img.style.top = it.y + 'vw';
      img.style.width = it.w + 'vw';
      box.appendChild(img);
    });
    return box;
  }

  // Bloc « image » : grande photo pleine largeur
  function buildWide(b) {
    var d = photo(b.image, 'flo-b-wide');
    if (b.height) d.style.height = b.height;
    d.style.backgroundPosition = (b.positionX || '50%') + ' ' + (b.position || '50%');
    return d;
  }

  // Bloc « tarifs » : tableau nom — prix — description, puis une note
  function buildPriceTable(b) {
    var wrap = el('div', 'flo-b-prices');
    if (b.title) wrap.appendChild(el('h2', 'flo-b-prices-title', b.title));
    (b.items || []).forEach(function (it) {
      var row = el('div', 'flo-b-prices-row');
      row.appendChild(el('span', 'flo-b-prices-name', it.label));
      row.appendChild(el('span', 'flo-b-prices-dash'));
      row.appendChild(el('span', 'flo-b-prices-price', it.price));
      row.appendChild(el('span', 'flo-b-prices-desc', it.text || ''));
      wrap.appendChild(row);
    });
    if (b.note) {
      wrap.appendChild(el('span', 'flo-b-prices-sep'));
      wrap.appendChild(el('p', 'flo-b-prices-note', b.note));
    }
    return wrap;
  }

  // Bloc « duo » : photos superposées + texte manuscrit à gauche, grand texte + petit texte à droite
  function buildDuo(b) {
    var wrap = el('div', 'flo-b-duo');
    var art = el('div', 'flo-b-duo-art');
    (b.images || []).forEach(function (url, i) { art.appendChild(photo(url, 'flo-b-duo-img flo-b-duo-img' + (i + 1))); });
    if (b.video) art.appendChild(buildVideo(b));
    if (b.scriptImage) {
      var si = el('img', 'flo-b-duo-script flo-b-duo-script-img');
      si.src = b.scriptImage;
      si.alt = (b.script || []).join(' ');
      art.appendChild(si);
    } else if (b.script) {
      var sc = el('div', 'flo-b-duo-script');
      b.script.forEach(function (line, i) { sc.appendChild(el('span', 'flo-b-duo-line flo-b-duo-line' + (i + 1), line)); });
      art.appendChild(sc);
    }
    wrap.appendChild(art);

    var col = el('div', 'flo-b-duo-text');
    var st = el('div', 'flo-b-statement');
    (b.statement || []).forEach(function (t) { st.appendChild(el('p', null, t)); });
    col.appendChild(st);
    if (b.text) {
      var small = el('div', 'flo-b-small');
      b.text.forEach(function (t) { small.appendChild(el('p', null, t)); });
      col.appendChild(small);
    }
    wrap.appendChild(col);
    return wrap;
  }

  // Bloc « menu » : liste de tarifs posée sur une image de fond
  function buildMenuCard(b) {
    var card = photo(b.background, 'flo-b-menu');
    if (b.title) card.appendChild(el('h2', 'flo-b-menu-title', b.title));
    var ul = el('ul', 'flo-b-menu-list');
    (b.items || []).forEach(function (it) {
      var li = el('li');
      li.appendChild(el('span', 'flo-label', it.label));
      li.appendChild(el('span', 'flo-dots'));
      li.appendChild(el('span', 'flo-price', it.price));
      ul.appendChild(li);
    });
    card.appendChild(ul);
    return card;
  }

  function buildBlocks() {
    document.body.classList.add('flo-has-content', 'flo-plain');
    var wrap = el('section', 'flo-blocks');
    (page.blocks || []).forEach(function (b) {
      var node;
      if (b.type === 'title') {
        node = el('h1', 'flo-b-title', b.text);
      } else if (b.type === 'text') {
        node = el('div', 'flo-b-text');
        (b.paragraphs || []).forEach(function (t) { node.appendChild(el('p', null, t)); });
      } else if (b.type === 'strip') {
        node = buildStrip(b);
      } else if (b.type === 'statement') {
        node = el('div', 'flo-b-statement');
        (b.paragraphs || [b.text]).forEach(function (t) { node.appendChild(el('p', null, t)); });
      } else if (b.type === 'collage') {
        node = buildCollage(b);
      } else if (b.type === 'image') {
        node = buildWide(b);
      } else if (b.type === 'prices') {
        node = buildPriceTable(b);
      } else if (b.type === 'duo') {
        node = buildDuo(b);
      } else if (b.type === 'menu') {
        node = buildMenuCard(b);
      } else if (b.type === 'services') {
        node = buildServices(b);
      }
      if (node) wrap.appendChild(node);
    });
    return wrap;
  }

  function buildContent() {
    if (page && page.layout === 'blocks') return buildBlocks();
    if (page && page.fullscreen) return page.statement ? buildHome() : null;
    if (page && page.layout === 'split') return buildSplit();
    if (page && page.layout === 'contact') return buildContact();
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
  loadCss('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,400;1,400&family=DM+Sans:wght@400;500;600&family=Gloock&family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,700&family=Oswald:wght@300;400&family=Pinyon+Script&display=swap');

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

      // Texture de fond sur toutes les pages sauf l'accueil
      if (!isHome && page && page.texture === false) {
        // page sur fond blanc uni, sans texture
      } else if (!isHome && config.texture && config.texture.image) {
        var t = config.texture;
        var veil = 1 - (t.opacity == null ? 1 : t.opacity);
        var base = t.baseColor || '#eeeeec';
        var rgb = base.replace('#', '').match(/.{2}/g).map(function (h) { return parseInt(h, 16); }).join(',');
        var tex = el('style');
        tex.textContent =
          'body.flo-textured{background:' +
          'linear-gradient(rgba(' + rgb + ',' + veil + '),rgba(' + rgb + ',' + veil + ')),' +
          "url('" + t.image + "') center / cover fixed, " + base + ' !important;}';
        document.head.appendChild(tex);
        document.body.classList.add('flo-textured');
      }

      var hero = buildHeader();
      document.body.insertBefore(hero, document.body.firstChild);

      // En-tête fixe : le menu passe sur un fond clair, en foncé, quand le contenu défile dessous.
      var onScroll = function () {
        // accueil : après les photos ; autres pages : dès qu'on commence à défiler
        var limit = hero.classList.contains('flo-full') ? hero.offsetHeight - 90 : 1;
        hero.classList.toggle('flo-scrolled', window.scrollY > limit);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      onScroll();

      var content = buildContent();
      if (content) hero.parentNode.insertBefore(content, hero.nextSibling);

      // Masquer le contenu propre à Site Creator (titre, blocs par défaut, pied de page)
      // sur les pages dont le contenu vient d'ici.
      // On ne masque QUE le(s) bloc(s) indiqué(s) dans config.js > siteContent,
      // pour ne jamais toucher à la barre latérale de l'éditeur.
      //  - désactivable par page avec « keepSiteCreator: true » (ex. la boutique)
      //  - si le formulaire Contact n'a pas été trouvé, on ne masque rien pour ne pas le perdre
      var editorOpen = !!document.getElementById('koLeftMenu'); // barre latérale de l'éditeur Site Creator
      if ((content || (page && page.fullscreen)) && config.siteContent &&
          !page.keepSiteCreator && !formMissing && !editorOpen) {
        var hideSite = el('style');
        hideSite.textContent = config.siteContent + '{display:none !important;}';
        document.head.appendChild(hideSite);
      }
    });
})();
