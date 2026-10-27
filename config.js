/*
  Plurielles — réglages communs à toutes les pages
*/
Plurielles.config({

  logo: {
    // Logo papillon + typo blanche
    image: 'https://yu4g9wciszu.infomaniak.site/data/files/photos/pluriellesblanctypo.png',
    width: '190px',         // largeur sur ordinateur
    widthMobile: '130px',   // largeur sur mobile
    offset: '-5px'          // décalage vertical pour aligner « Plurielles » avec le menu
                            // (négatif = monte, positif = descend)
  },

  // Liens du menu : le href doit être l'adresse exacte de la page dans Site Creator
  menu: {
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
  },

  // Pages sans photo (pas de fichier dans pages/) : bandeau de couleur
  bar: {
    background: '#c8c9cb',
    textColor: '#ffffff'
  },

  // En-tête d'origine du thème Site Creator, masqué partout
  themeHeader: 'header'

});
