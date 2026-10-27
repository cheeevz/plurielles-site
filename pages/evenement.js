/*
  Page Événement — adresse : /evenement
*/
Plurielles.page({

  // ----- Bannière -----
  image: 'https://studioplurielles.fr/data/files/img_5480zretouche3.png',
  title: 'Événement',
  position: '35%',    // cadrage vertical   : 0% = haut, 100% = bas
  positionX: '100%',  // cadrage horizontal : 0% = gauche, 100% = droite
  zoom: 1.25,         // 1 = normal, 1.2 = 120 %...

  // ----- Texte -----
  // À adapter : ce texte est pour l'instant celui de la page Hommage
  intro: [
    "Chez Plurielles, accompagner le deuil est au cœur même de notre métier. Pour nous, les fleurs sont un langage. Elles racontent une histoire, un souvenir, un détail, qui nous permettent de composer des hommages sur-mesure.",
    "Nous pensons nos créations comme un ensemble. Les fleurs prennent place dans l’espace, se déploient et créent une présence qui accompagne ce moment avec douceur.",
    "C’est avec une écoute attentive et bienveillante de vos souhaits et de vos souvenirs, que nous donnons forme à des hommages sincères."
  ],

  menuTitle: 'Menu',
  prices: [
    { label: 'Bouquet de mariée',                    price: 'à partir de 80 €' },
    { label: 'Bouquet de demoiselle d’honneur',      price: 'à partir de 40 €' },
    { label: 'Boutonnière',                          price: 'à partir de 20 €' },
    { label: 'Bout de banc',                         price: 'à partir de 15 €' },
    { label: 'Décors d’allée (compositions au sol)', price: 'à partir de 90 €' },
    { label: 'Arche ou structure florale',           price: 'à partir de 500 €' },
    { label: 'Composition d’accueil',                price: 'à partir de 200 €' },
    { label: 'Soliflore',                            price: 'à partir de 20 €' },
    { label: 'Centre de table',                      price: 'à partir de 60 €' },
    { label: 'Décors de buffet & bar',               price: 'à partir de 120 €' },
    { label: 'Sculpture florale',                    price: 'à partir de 150 €' },
    { label: 'Créations spécifiques ou configuration particulière', price: 'sur demande' }
  ]
});
