/*
  Page d'accueil — une seule photo plein écran, fixe (pas de défilement),
  texte blanc posé sur la photo, logo et menu en vieux rose.
  (Ancienne version à deux photos : historique GitHub de ce fichier.)
*/
Plurielles.page({
  fullscreen: true,
  textOnImage: true,              // le texte est posé sur la photo, pas en dessous

  // Référencement : titre principal (invisible) et description de la photo pour Google
  seoTitle: 'Plurielles — studio floral à Paris',

  logoSubtitle: 'Studio floral',
  logoSubtitleGap: 'calc(var(--flo-logo-w) * 0.072)',   // écart entre le milieu de « Plurielles » et « Studio floral »

  // Couleurs (d'après la maquette)
  logoColor: '#b58f90',           // logo « Plurielles » en vieux rose
  menuColor: '#93787b',           // menu et « Studio floral »
  textColor: '#ffffff',           // texte sur la photo

  // ----- Photo de fond -----
  // position        : cadrage vertical   (0% = haut, 100% = bas)
  // positionX       : cadrage horizontal (0% = gauche, 100% = droite)
  // positionMobile  : cadrage sur téléphone (« horizontal vertical »), le bouquet est à droite
  image: 'https://studioplurielles.fr/data/files/acceuil/chrysgoodfondecran.png',
  imageAlt: 'Composition florale de chrysanthèmes et baies orange, Plurielles studio floral à Paris',
  position: '50%',
  positionX: '50%',
  positionMobile: '72% 50%',

  // ----- Texte sur la photo -----
  statement: [
    "Plurielles est un studio de création florale basé à Paris, qui envisage le végétal comme une matière vivante, à observer, transformer et réinventer.",
    "Inspirées par les paysages et les arts visuels, nos créations mêlent le végétal à d’autres territoires créatifs, entre compositions florales, scénographie et direction artistique, pour les marques, les événements de la vie et les espaces."
  ]
});
