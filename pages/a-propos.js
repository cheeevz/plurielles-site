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
      position: '50%',            // cadrage vertical   : 0% = haut, 100% = bas
      positionX: '50%',           // cadrage horizontal : 0% = gauche, 100% = droite
      sections: [
        { heading: 'À propos du studio', bold: true, paragraphs: [
          "Plurielles est un studio de création végétale fondé par Claire Benoît et Pauline Delamotte, basé à Paris.",
          "À la croisée du végétal, des arts visuels et du design, le studio imagine des compositions et des scénographies pour les marques, les événements et les espaces.\nNotre approche se nourrit de recherches visuelles, de collectes et d’explorations de matières. Fleurs, textiles, objets et ornements se rencontrent dans des compositions où les couleurs, les textures et les volumes dialoguent, donnant naissance à des univers personnels.",
          "Du choix des matières à la mise en scène, chaque projet est pensé comme un ensemble, avec une attention particulière portée aux détails, aux associations inattendues et à l’identité de chaque lieu ou événement."
        ]},

        { heading: 'À propos des fondatrices', bold: true, spaceBefore: true },

        { heading: 'Claire Benoît', paragraphs: [
          "Mon univers créatif puise dans les formes, les textures et les couleurs du monde végétal. J’aime les possibilités infinies qu’offre la fleur et la liberté qu’elle laisse à la création.\nAprès des études en marketing, je me suis rapidement tournée vers l’art floral, une pratique qui m’a permis d’explorer ma créativité et de développer mon propre regard.\nJ’ai toujours gardé en parallèle un goût pour les chiffres, la stratégie et le développement. Aujourd’hui, ces deux facettes se complètent naturellement dans mon travail, entre recherche créative, développement de projets et relations clients."
        ]},

        { heading: 'Pauline Delamotte', paragraphs: [
          "Formée au stylisme et au design textile et surface, Pauline a travaillé pendant plus de dix ans dans les domaines de l’ornementation textile, du stylisme et de la recherche de tendances, avant de se tourner vers la création florale.",
          "Sa pratique se nourrit de recherches visuelles, de collectes et d’explorations de matières. Elle transpose au végétal son intérêt pour le motif, l’ornement et la composition, en associant fleurs, textiles et objets pour imaginer des scénographies singulières.\nAu sein de Plurielles, elle développe également l’identité visuelle et la direction artistique du studio, de la recherche de matières à la mise en scène et à la photographie, avec une attention particulière portée aux détails et à la cohérence des univers créés."
        ]}
      ]
    }
  ]
});
