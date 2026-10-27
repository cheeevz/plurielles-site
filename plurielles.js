/*
  Plurielles — menu du site (accueil plein écran + bandeau sur les autres pages)
  Chargé depuis Site Creator par une seule ligne :
  <script src="https://cheeevz.github.io/plurielles-site/plurielles.js"></script>

  Toutes les modifs se font ici, puis git push.
  Réglages : bloc CONFIG. Styles : variable CSS plus bas.
*/
(function () {
  /* ================= CONFIG ================= */
  var CONFIG = {
    // URL de la grande photo (copiée depuis la bibliothèque de fichiers)
    heroImage: 'https://yu4g9wciszu.infomaniak.site/data/files/photos/photos/uniongrid9.png',

    // URL du logo papillon (PNG avec fond transparent)
    logoImage: 'https://yu4g9wciszu.infomaniak.site/data/files/photos/photos/pluriellesfleurs.png',

    // Texte posé sur le logo. Mettre '' si le texte est déjà dans l'image.
    logoText: '',

    // Cadrage vertical de la photo : 0% = on voit le haut de l'image (photo « baissée »),
    // 50% = centrée, 100% = on voit le bas. Ajuster par petits pas (10%, 20%...).
    heroPosition: '0%',

    // Bandeau des autres pages : couleur de fond et couleur du texte du menu
    barBackground: '#c8c9cb',
    barTextColor: '#ffffff',

    // Sélecteur CSS de l'en-tête d'origine du thème, masqué sur toutes les pages.
    // À vérifier avec l'inspecteur du navigateur (clic droit > Inspecter).
    themeHeader: 'header',

    // Chemins considérés comme « page d'accueil »
    homePaths: ['/', '/index.php', '/index.html', '/fr', '/fr/'],

    // Liens (adapter les href aux URL réelles des pages)
    left: [
      { label: 'Événement', href: '/evenement' },
      { label: 'Mariage',   href: '/mariage' },
      { label: 'Hommage',   href: '/hommage' }
    ],
    right: [
      { label: 'Projets',   href: '/projets' },
      { label: 'À propos',  href: '/a-propos' },
      { label: 'Contact',   href: '/contact' },
      { label: 'Shop',      href: '/shop' }
    ]
  };
  /* ========================================== */

  var path = window.location.pathname;
  var isHome = CONFIG.homePaths.indexOf(path) !== -1;

  // Styles (injectés par le script)
  var CSS = `
  .flo-hero {
    position: relative;
    width: 100%;
    height: 100vh;
    height: 100svh;
    background-color: #c8c9cb;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .flo-nav {
    position: absolute;
    inset: 0 0 auto 0;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: start;
    padding: 32px 7vw 0;
    z-index: 50;
  }

  .flo-nav ul {
    list-style: none;
    margin: 30px 0 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .flo-nav a {
    color: var(--flo-text, #fff);
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
    transition: opacity 0.2s ease;
  }
  .flo-nav a:hover { opacity: 0.6; }

  /* Menu gauche : sans-serif */
  .flo-left {
    justify-content: flex-start;
    gap: 30px;
    font-family: 'DM Mono', monospace;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.06em;
  }

  /* Menu droit : mono */
  .flo-right {
    justify-content: flex-end;
    gap: 17px;
    font-family: 'DM Mono', monospace;
    font-size: 14px;
    letter-spacing: 0.06em;
  }

  /* Logo centré, légèrement « coupé » en haut comme sur la maquette */
  .flo-logo {
    position: relative;
    display: block;
    width: 125px;
    margin-top: -24px;
  }
  .flo-logo img {
    display: block;
    width: 100%;
    height: auto;
  }
  .flo-logo span {
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.08em;
    white-space: nowrap;
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.25);
    pointer-events: none;
  }

  /* Bouton menu mobile (caché sur ordinateur) */
  .flo-burger {
    display: none;
    position: absolute;
    top: 30px;
    right: 22px;
    z-index: 60;
    background: none;
    border: 0;
    color: var(--flo-text, #fff);
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
  }

  @media (max-width: 860px) {
    .flo-nav {
      grid-template-columns: 1fr;
      justify-items: center;
      padding: 24px 16px 0;
    }
    .flo-logo { width: 100px; margin-top: -16px; grid-row: 1; }
    .flo-burger { display: block; }

    .flo-nav ul {
      display: none;
      flex-direction: column;
      gap: 14px;
      margin: 14px 0 0;
    }
    .flo-hero.is-open .flo-nav ul { display: flex; }
    .flo-hero.is-open .flo-nav {
      background: rgba(0, 0, 0, 0.35);
      padding-bottom: 28px;
    }
  }

  /* ----- Bandeau des autres pages ----- */
  .flo-hero.flo-bar {
    height: auto;
    overflow: visible;
  }
  .flo-bar .flo-nav {
    position: relative;
    padding: 24px 7vw 24px;
  }
  .flo-bar .flo-logo { width: 95px; margin-top: -10px; }
  .flo-bar .flo-nav ul { margin-top: 20px; }

  /* Page en cours soulignée */
  .flo-nav a.is-active {
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 1px;
  }

  @media (max-width: 860px) {
    .flo-bar .flo-logo { width: 80px; margin-top: -6px; }
    .flo-bar .flo-nav { padding: 18px 16px 18px; }
    .flo-hero.flo-bar.is-open .flo-nav { padding-bottom: 28px; }
  }
`;
  var styleTag = document.createElement('style');
  styleTag.textContent = CSS;
  document.head.appendChild(styleTag);

  function build() {
    if (document.querySelector('.flo-hero')) return;

    // Polices
    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400&family=DM+Sans:wght@400;500&display=swap';
    document.head.appendChild(font);

    // Masquer l'en-tête du thème (toutes les pages)
    if (CONFIG.themeHeader) {
      var hide = document.createElement('style');
      hide.textContent = CONFIG.themeHeader + '{display:none !important;}';
      document.head.appendChild(hide);
    }

    function list(items, cls) {
      var ul = document.createElement('ul');
      ul.className = cls;
      items.forEach(function (it) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = it.href;
        a.textContent = it.label;
        if (path === it.href || path.indexOf(it.href + '/') === 0) a.className = 'is-active';
        li.appendChild(a);
        ul.appendChild(li);
      });
      return ul;
    }

    var hero = document.createElement('section');
    hero.className = 'flo-hero';
    if (isHome) {
      hero.style.backgroundImage = "url('" + CONFIG.heroImage + "')";
      hero.style.backgroundPosition = 'center ' + (CONFIG.heroPosition || '50%');
    } else {
      hero.classList.add('flo-bar');
      hero.style.backgroundColor = CONFIG.barBackground;
      hero.style.setProperty('--flo-text', CONFIG.barTextColor);
    }

    var nav = document.createElement('nav');
    nav.className = 'flo-nav';
    nav.setAttribute('aria-label', 'Navigation principale');

    var logo = document.createElement('a');
    logo.className = 'flo-logo';
    logo.href = '/';
    var img = document.createElement('img');
    img.src = CONFIG.logoImage;
    img.alt = CONFIG.logoText || 'Logo';
    logo.appendChild(img);
    if (CONFIG.logoText) {
      var txt = document.createElement('span');
      txt.textContent = CONFIG.logoText;
      logo.appendChild(txt);
    }

    nav.appendChild(list(CONFIG.left, 'flo-left'));
    nav.appendChild(logo);
    nav.appendChild(list(CONFIG.right, 'flo-right'));

    var burger = document.createElement('button');
    burger.className = 'flo-burger';
    burger.type = 'button';
    burger.textContent = 'Menu';
    burger.addEventListener('click', function () {
      var open = hero.classList.toggle('is-open');
      burger.textContent = open ? 'Fermer' : 'Menu';
    });

    hero.appendChild(nav);
    hero.appendChild(burger);
    document.body.insertBefore(hero, document.body.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
