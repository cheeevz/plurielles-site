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
  // logo « Plurielles » en vieux rose #b58f90 (filtre calculé pour teinter le logo blanc)
  logoFilter: 'brightness(0) saturate(100%) invert(62%) sepia(10%) saturate(698%) hue-rotate(309deg) brightness(95%) contrast(94%)',
  menuColor: '#93787b',           // menu et « Studio floral »
  textColor: '#ffffff',           // texte sur la photo

  // ----- Photo de fond -----
  // position        : cadrage vertical   (0% = haut, 100% = bas)
  // positionX       : cadrage horizontal (0% = gauche, 100% = droite)
  // positionMobile  : cadrage sur téléphone (« horizontal vertical »), le bouquet est à droite
  image: 'https://studioplurielles.fr/data/files/acceuil/chrysgoodfondecran.png',
  imageAlt: 'Composition florale de chrysanthèmes et baies orange, Plurielles studio floral à Paris',
  position: '5%',                 // calé vers le haut pour garder tout le bouquet
  positionX: '50%',
  positionMobile: '72% 50%',
  // zoom: 0.9,                   // < 1 : photo réduite (désactivé, la photo remplit l'écran)
  // zoomOrigin: '50% 40%',          // place de la photo réduite : 2e valeur plus petite = photo plus haute (0% = collée en haut, 100% = en bas)
  // couleur autour de la photo réduite : celle du mur, plus claire à gauche, plus chaude à droite
  // background: 'linear-gradient(90deg, #e6e8e7 0%, #e0e1df 50%, #d3d1ca 100%)',

  // ----- Texte sur la photo -----
  statement: [
    "Plurielles est un studio de création florale basé à Paris, qui envisage le végétal comme une matière vivante, à observer, transformer et réinventer.",
    "Inspirées par les paysages et les arts visuels, nos créations mêlent le végétal à d’autres territoires créatifs, entre compositions florales, scénographie et direction artistique, pour les marques, les événements de la vie et les espaces."
  ]
});
