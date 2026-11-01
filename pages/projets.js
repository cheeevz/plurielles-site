/*
  Page Projets — adresse : /projets
  Collage de photos entières, placées librement (nouvelle maquette)
*/
Plurielles.page({
  layout: 'blocks',
  texture: false,                 // fond blanc uni, sans texture

  header: {                       // en-tête blanc, menu foncé
    background: '#ffffff',
    textColor: '#1f1f1f'
  },

  blocks: [

    { type: 'title', text: 'Projets' },

    // Collage : chaque photo s'affiche en entier (sans recadrage).
    // x = distance au bord gauche, y = distance au haut du collage, w = largeur,
    // le tout en % de la largeur de l'écran (pour que le collage s'adapte à tous les écrans).
    // height = hauteur totale du collage (à augmenter si on ajoute des photos plus bas).
    { type: 'collage', height: '142vw', items: [
      { image: 'https://studioplurielles.fr/data/files/projets/photo1.png',     x: 47.5, y: 0,     w: 15.3 },
      { image: 'https://studioplurielles.fr/data/files/projets/photo2.png', x: 65.7, y: 4.7,   w: 19.8 },
      { image: 'https://studioplurielles.fr/data/files/projets/photo3.png', x: 65.8, y: 14.3,  w: 14.6 },
      { image: 'https://studioplurielles.fr/data/files/projets/photo4.png',  x: 10.8, y: 17.2,  w: 19.5 },
      { image: 'https://studioplurielles.fr/data/files/projets/photo5.png',      x: 34.4, y: 25.3,  w: 28.4 },
      { image: 'https://studioplurielles.fr/data/files/projets/photo6.png',     x: 65.7, y: 39,    w: 19 },
      { image: 'https://studioplurielles.fr/data/files/projets/photo7.png',    x: 25.3, y: 48.4,  w: 12.3 },
      { image: 'https://studioplurielles.fr/data/files/projets/photo8.png',       x: 40.9, y: 48.4,  w: 21.8 },
      { image: 'https://studioplurielles.fr/data/files/projets/photo9.png',       x: 13.4, y: 72.2,  w: 16.7 },
      { image: 'https://studioplurielles.fr/data/files/projets/photo10.png',    x: 34.4, y: 69.6,  w: 22.2 },
      { image: 'https://studioplurielles.fr/data/files/projets/photo11.png',       x: 60.5, y: 68.7,  w: 15.2 },
      { image: 'https://studioplurielles.fr/data/files/projets/artich8.png',    x: 16.7, y: 99.6,  w: 14.8 },
      { image: 'https://studioplurielles.fr/data/files/projets/photo13.png',     x: 45.4, y: 106,   w: 23.1 },
      { image: 'https://studioplurielles.fr/data/files/projets/photo14.png',         x: 70.2, y: 97.0,  w: 13.7 }
    ]}
  ]
});
