/*
  Page d'accueil
  - deux photos côte à côte en plein écran
  - menu et logo blancs (seule page dans ce cas), avec « Studio floral » sous le logo
  - texte de présentation en dessous
*/
Plurielles.page({
  fullscreen: true,

  logoSubtitle: 'Studio floral',
  logoSubtitleGap: '30px',   // écart entre le milieu de « Plurielles » et « Studio floral »

  // ----- Photos (gauche, puis droite) -----
  // position   : cadrage vertical   (0% = haut, 100% = bas)
  // positionX  : cadrage horizontal (0% = gauche, 100% = droite)
  // zoom       : 1 = remplit le cadre ; plus grand = zoome ; plus petit = dézoome
  // background : couleur visible autour de la photo quand zoom < 1 (prendre celle du mur)
  images: [
    { url: 'https://studioplurielles.fr/data/files/acceuil/img_6298jj.png', position: '25%', positionX: '60%', zoom: 1.8 },
    { url: 'https://studioplurielles.fr/data/files/acceuil/img_4945retouchesokgo.png', position: '50%', positionX: '50%', zoom: 1 }
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
