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
    { type: 'collage', height: '136vw', items: [
      { image: 'https://COLLER-ICI-URL-TABOURET.jpg',     x: 47.5, y: 0,     w: 15.3 },
      { image: 'https://COLLER-ICI-URL-FLEURS-ROSES.jpg', x: 65.7, y: 4.7,   w: 19.8 },
      { image: 'https://COLLER-ICI-URL-BOUQUET-VERT.jpg', x: 65.8, y: 14.3,  w: 14.6 },
      { image: 'https://COLLER-ICI-URL-TABLE-NAPPE.jpg',  x: 10.8, y: 17.2,  w: 19.5 },
      { image: 'https://COLLER-ICI-URL-CHAISES.jpg',      x: 34.4, y: 25.3,  w: 28.4 },
      { image: 'https://COLLER-ICI-URL-ESCALIER.jpg',     x: 65.7, y: 36.2,  w: 22.7 },
      { image: 'https://COLLER-ICI-URL-SOLIFLORE.jpg',    x: 25.3, y: 48.4,  w: 12.3 },
      { image: 'https://COLLER-ICI-URL-DAHLIA.jpg',       x: 40.9, y: 48.4,  w: 21.8 },
      { image: 'https://COLLER-ICI-URL-RIDEAU.jpg',       x: 13.4, y: 72.2,  w: 16.7 },
      { image: 'https://COLLER-ICI-URL-MANNEQUIN.jpg',    x: 34.4, y: 69.6,  w: 22.2 },
      { image: 'https://COLLER-ICI-URL-ORANGE.jpg',       x: 60.5, y: 68.7,  w: 15.2 },
      { image: 'https://COLLER-ICI-URL-SCULPTURE.jpg',    x: 16.7, y: 99.6,  w: 14.8 },
      { image: 'https://COLLER-ICI-URL-ETAGERES.jpg',     x: 45.4, y: 102.4, w: 23.1 },
      { image: 'https://COLLER-ICI-URL-MAIN.jpg',         x: 70.2, y: 97.0,  w: 13.7 }
    ]}
  ]
});
