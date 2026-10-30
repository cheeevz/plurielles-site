/*
  Page d'accueil
  - deux photos côte à côte en plein écran
  - menu et logo blancs (seule page dans ce cas), avec « Studio floral » sous le logo
  - texte de présentation en dessous
*/
Plurielles.page({
  fullscreen: true,

  logoSubtitle: 'Studio floral',

  // ----- Photos (gauche, puis droite) -----
  // position  : cadrage vertical   (0% = haut, 100% = bas)
  // positionX : cadrage horizontal (0% = gauche, 100% = droite)
  images: [
    { url: 'https://COLLER-ICI-URL-PHOTO-GAUCHE.jpg', position: '50%', positionX: '50%' },
    { url: 'https://COLLER-ICI-URL-PHOTO-DROITE.jpg', position: '50%', positionX: '50%' }
  ],

  // ----- Texte sous les photos -----
  // Grand texte en majuscules
  statement: [
    "Plurielles est un studio de création florale basé à Paris, qui envisage le végétal comme une matière vivante, à observer, transformer et réinventer.",
    "Inspirées par les paysages et les arts visuels, nos créations mêlent le végétal à d’autres territoires créatifs, entre compositions florales, scénographie et direction artistique, pour les marques, les événements de la vie et les espaces."
  ],

  // Petit texte en dessous
  text: [
    "Que vous soyez professionnel ou particulier, nous vous proposons un accompagnement complet pour vos besoins floraux.",
    "Basé à Paris, le studio assure les livraisons dans Paris et sa petite couronne. Nous nous déplaçons également dans d’autres régions pour accompagner vos projets, selon leur nature et leur localisation."
  ]
});
