/*
  Plurielles — réglages communs à toutes les pages
*/
Plurielles.config({

  logo: {
    // Papillon sous la typo : laisser vide pour n'afficher que la typo
    symbol: '',
    // Typo « Plurielles » blanche, posée au centre du papillon
    image: 'https://yu4g9wciszu.infomaniak.site/data/files/photos/pluriellesblanctypo.png',
    typoScale: 1,           // taille de la typo par rapport au papillon (1 = même largeur)
    typoOffset: '0px',      // décalage vertical de la typo sur le papillon (négatif = monte)
    // Version à typo foncée pour les pages à fond clair.
    // Laisser vide : le logo blanc est alors assombri automatiquement.
    imageDark: '',
    width: '190px',         // largeur sur ordinateur
    widthMobile: '130px',   // largeur sur mobile
    offset: '-5px'          // décalage vertical pour aligner « Plurielles » avec le menu
                            // (négatif = monte, positif = descend)
  },

  // Liens du menu : le href doit être l'adresse exacte de la page dans Site Creator
  menu: {
    left: [
      { label: 'Événements', href: '/evenement' },
      { label: 'Mariage',   href: '/mariage' },
      { label: 'Hommage',   href: '/hommage' }
    ],
    right: [
      { label: 'Projets',   href: '/projets' },
      { label: 'À propos',  href: '/a-propos' },
      { label: 'Contact',   href: '/contact' },
      { label: 'Shop',      href: '/shop' }
    ]
  },

  // Pages sans photo (pas de fichier dans pages/) : bandeau de couleur
  bar: {
    background: '#c8c9cb',
    textColor: '#1f1f1f'   // menu foncé sur les pages à fond clair
  },

  // Texture de fond des pages (toutes sauf l'accueil)
  texture: {
    image: 'https://studioplurielles.fr/data/files/img_4862.webp',
    opacity: 0.46,
    baseColor: '#ffffff'   // couleur sous la texture
  },

  // En-tête d'origine du thème Site Creator, masqué partout
  themeHeader: 'header',

  // Bloc qui contient tout le contenu Site Creator de la page (titre, blocs, pied de page),
  // masqué sur les pages dont le contenu vient du repo.
  // À récupérer avec l'inspecteur. Vide = rien n'est masqué.
  siteContent: '#website, #scrollToTop'

});
