/*
  Page À propos — adresse : /a-propos
  Photo collée au bord gauche, texte à droite (nouvelle maquette)
  Dans les textes, « \n » = retour à la ligne sans espace.
*/
Plurielles.page({
  layout: 'blocks',
  texture: false,                 // fond blanc uni, sans texture

  header: {                       // en-tête blanc, menu foncé
    background: '#ffffff',
    textColor: '#1f1f1f'
  },

  blocks: [

    { type: 'title', text: 'À propos' },

    { type: 'split',
      image: 'https://studioplurielles.fr/data/files/pluriellesunionretouchesok22.png',
      alt: 'Création florale de Plurielles, studio floral à Paris',
      position: '50%',            // cadrage vertical   : 0% = haut, 100% = bas
      positionX: '50%',           // cadrage horizontal : 0% = gauche, 100% = droite
      sections: [
        { heading: 'Le studio', bold: true, paragraphs: [
          "Plurielles est un studio de création florale basé à Paris.",
          "À la croisée du végétal, des arts visuels et du design, le studio imagine des compositions et des scénographies pour les marques, les événements et les espaces.\nNotre approche se nourrit de recherches visuelles, de collectes et d’explorations de matières. Fleurs, textiles, objets et ornements se rencontrent dans des compositions où les couleurs, les textures et les volumes dialoguent, donnant naissance à des univers personnels.",
          "Du choix des matières à la mise en scène, chaque projet est pensé comme un ensemble, avec une attention particulière portée aux détails, aux associations inattendues et à l’identité de chaque lieu ou événement."
        ]},

        { heading: 'Pauline Delamotte', bold: true, spaceBefore: true,
          subtitle: 'Fondatrice & directrice artistique',     // en italique sous le nom
          paragraphs: [
          "Formée au stylisme et au design textile et surface, Pauline a travaillé pendant plus de dix ans dans les domaines de l’ornementation textile, du stylisme et de la recherche de tendances, avant de se tourner vers la création florale.",
          "Son travail explore les liens entre le végétal, le textile et l’objet. Elle transpose au végétal son intérêt pour le motif, l’ornement et la composition, en associant fleurs, textiles et objets pour imaginer des scénographies singulières.",
          "À travers Plurielles, elle développe un univers personnel et assure la direction artistique du studio, de la conception des projets à leur mise en image."
        ]}
      ]
    }
  ]
});
