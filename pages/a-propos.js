/*
  Page À propos — adresse : /a-propos
  Mise en page : photo à gauche, texte à droite
*/
Plurielles.page({
  layout: 'split',

  // En-tête clair (pas de photo en bannière sur cette page)
  header: {
    background: '#eeeeec',
    textColor: '#1f1f1f'
  },
  // Logo de cette page : le logo à typo blanche ne se voit pas sur fond clair.
  // Mettre ici l'URL d'une version avec la typo foncée quand elle existe.
  // logoImage: 'https://...',

  // ----- Photo de gauche -----
  image: 'https://COLLER-ICI-URL-DE-LA-PHOTO-A-PROPOS.jpg',
  position: '50%',    // cadrage vertical   : 0% = haut, 100% = bas
  positionX: '50%',   // cadrage horizontal : 0% = gauche, 100% = droite

  // ----- Texte de droite -----
  sections: [
    {
      title: 'À propos du studio',
      text: [
        "Plurielles est un studio de création végétale fondé par Claire Benoît et Pauline Delamotte, basé à Paris.",
        "À la croisée du végétal, des arts visuels et du design, le studio imagine des compositions et des scénographies pour les marques, les événements et les espaces.",
        "Notre approche se nourrit de recherches visuelles, de collectes et d’explorations de matières. Fleurs, textiles, objets et ornements se rencontrent dans des compositions où les couleurs, les textures et les volumes dialoguent, donnant naissance à des univers singuliers.",
        "Du choix des matières à la mise en scène, chaque projet est pensé comme un ensemble, avec une attention particulière portée aux détails, aux associations inattendues et à l’identité de chaque lieu ou événement."
      ]
    },
    {
      title: 'À propos des fondatrices'
    },
    {
      title: 'Claire Benoît',
      text: [
        // Texte à venir
      ]
    },
    {
      title: 'Pauline Delamotte',
      text: [
        "Formée au stylisme et au design textile et surface, Pauline a travaillé pendant plus de dix ans dans les domaines de l’ornementation textile, du stylisme et de la recherche de tendances, avant de se tourner vers la création florale.",
        "Sa pratique se nourrit de recherches visuelles, de collectes et d’explorations de matières. Elle transpose au végétal son intérêt pour le motif, l’ornement et la composition, en associant fleurs, textiles et objets pour imaginer des scénographies singulières.",
        "Au sein de Plurielles, elle développe également l’identité visuelle et la direction artistique du studio, de la recherche de matières à la mise en scène et à la photographie, avec une attention particulière portée aux détails et à la cohérence des univers créés."
      ]
    }
  ]
});
