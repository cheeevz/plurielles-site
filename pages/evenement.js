/*
  Page Événements — adresse : /evenement
  Mise en page en « blocs », de haut en bas (nouvelle maquette)
*/
Plurielles.page({
  layout: 'blocks',
  texture: false,                 // fond blanc uni, sans texture

  header: {                       // en-tête blanc, menu foncé
    background: '#ffffff',
    textColor: '#1f1f1f'
  },

  blocks: [

    { type: 'title', text: 'Événements' },

    { type: 'text', paragraphs: [
      "Nous mettons le végétal au service de votre image et de vos événements, qu’ils soient intimistes ou de grande envergure.",
      "Nous concevons des créations florales inspirées de votre univers, de vos valeurs et du lieu. Chaque projet est pensé dans son ensemble afin de créer une expérience visuelle forte, cohérente et fidèle à votre identité."
    ]},

    // Frise : toutes les photos ont la même hauteur et gardent leur largeur propre ;
    // on la fait défiler à l'horizontale. Ajouter / retirer / réordonner librement.
    { type: 'strip', images: [
      'https://studioplurielles.fr/data/files/evenements/event13-700_1793553730.png',
      'https://studioplurielles.fr/data/files/evenements/event14-700.png',
      'https://studioplurielles.fr/data/files/evenements/event-620_1793553730.png',
      'https://studioplurielles.fr/data/files/evenements/event9-600.png',
      'https://studioplurielles.fr/data/files/evenements/event10-860_1793553729.png',
      'https://studioplurielles.fr/data/files/evenements/event10-620.png',
      'https://studioplurielles.fr/data/files/evenements/event11-600.png',
      'https://studioplurielles.fr/data/files/evenements/event2-700.png',
      'https://studioplurielles.fr/data/files/evenements/event3-700.png',
      'https://studioplurielles.fr/data/files/evenements/event6-600.png',
      'https://studioplurielles.fr/data/files/evenements/event8-620.png',
      'https://studioplurielles.fr/data/files/evenements/event12-860.png',
      'https://studioplurielles.fr/data/files/evenements/event13-700.png',
      'https://studioplurielles.fr/data/files/evenements/event15-700.png',
      'https://studioplurielles.fr/data/files/evenements/event8-700.png',
      'https://studioplurielles.fr/data/files/evenements/event10-860.png',
      'https://studioplurielles.fr/data/files/evenements/event11-860.png',
      'https://studioplurielles.fr/data/files/evenements/event-860.png',
      'https://studioplurielles.fr/data/files/evenements/event4-700.png',
      'https://studioplurielles.fr/data/files/evenements/event5-860.png',
      'https://studioplurielles.fr/data/files/evenements/event8-860.png',
      'https://studioplurielles.fr/data/files/evenements/event-620.png'
    ]},

    { type: 'statement', text: "De la conception au sourcing, en passant par la création et la production des compositions, jusqu’à l’installation et la désinstallation, nous nous occupons du projet floral de A à Z." },

    // Prestations. « col » place la carte dans une colonne précise (1 à 4).
    { type: 'services', items: [
      { title: 'Événements', image: 'https://COLLER-ICI-URL-EVENEMENTS.jpg',
        text: "Lancement de marque, dîners, vernissage, événement presse, cocktail et événement privés." },
      { title: 'Tables et réceptions', image: 'https://COLLER-ICI-URL-TABLES.jpg',
        text: "Scénographie florale et végétale, stylisme de table, buffet et d’espace de réception." },
      { title: 'Image et éditorial', image: 'https://COLLER-ICI-URL-EDITORIAL.jpg',
        text: "Direction artistique florale et végétale pour shootings, campagnes de marque et productions éditoriales." },
      { title: 'Installations', image: 'https://COLLER-ICI-URL-INSTALLATIONS.jpg',
        text: "Installations florales et végétales éphémères, vitrines, décors sur-mesure et mise en scène d’espace." },
      { title: 'Direction artistique', image: 'https://COLLER-ICI-URL-DIRECTION.jpg', col: 1,
        text: "Recherche matière, textures, végétaux, contenants, en accord avec l’idée de chaque projet." },
      { title: 'Ateliers et expériences', image: 'https://COLLER-ICI-URL-ATELIERS.jpg', col: 3,
        text: "Expériences créatives et interventions végétales pour les marques et les entreprises." }
    ]}
  ]
});
