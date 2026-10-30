/*
  Page Mariages — adresse : /mariage
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

    { type: 'title', text: 'Mariages' },

    { type: 'text', paragraphs: [
      "Célébrer votre union, c’est raconter votre histoire à deux. Nous nous inspirons de vos personnalités, de vos singularités et de vos goûts pour imaginer des créations qui vous ressemblent.",
      "Partagez-nous vos souvenirs, vos inspirations, votre palette couleur, une esthétique particulière, un tissu favori ; nous transformerons votre vision en créations florales sur-mesure !"
    ]},

    // Frise : toutes les photos ont la même largeur ; on la fait défiler à l'horizontale.
    { type: 'strip', images: [
      'https://COLLER-ICI-URL-PHOTO-01.jpg',
      'https://COLLER-ICI-URL-PHOTO-02.jpg',
      'https://COLLER-ICI-URL-PHOTO-03.jpg',
      'https://COLLER-ICI-URL-PHOTO-04.jpg',
      'https://COLLER-ICI-URL-PHOTO-05.jpg',
      'https://COLLER-ICI-URL-PHOTO-06.jpg',
      'https://COLLER-ICI-URL-PHOTO-07.jpg',
      'https://COLLER-ICI-URL-PHOTO-08.jpg',
      'https://COLLER-ICI-URL-PHOTO-09.jpg',
      'https://COLLER-ICI-URL-PHOTO-10.jpg',
      'https://COLLER-ICI-URL-PHOTO-11.jpg',
      'https://COLLER-ICI-URL-PHOTO-12.jpg',
      'https://COLLER-ICI-URL-PHOTO-13.jpg',
      'https://COLLER-ICI-URL-PHOTO-14.jpg',
      'https://COLLER-ICI-URL-PHOTO-15.jpg',
      'https://COLLER-ICI-URL-PHOTO-16.jpg',
      'https://COLLER-ICI-URL-PHOTO-17.jpg',
      'https://COLLER-ICI-URL-PHOTO-18.jpg',
      'https://COLLER-ICI-URL-PHOTO-19.jpg',
      'https://COLLER-ICI-URL-PHOTO-20.jpg',
      'https://COLLER-ICI-URL-PHOTO-21.jpg',
      'https://COLLER-ICI-URL-PHOTO-22.jpg',
      'https://COLLER-ICI-URL-PHOTO-23.jpg',
      'https://COLLER-ICI-URL-PHOTO-24.jpg',
      'https://COLLER-ICI-URL-PHOTO-25.jpg'
    ]},

    // Deux photos superposées + texte manuscrit à gauche, textes à droite
    { type: 'duo',
      images: [
        'https://COLLER-ICI-URL-PHOTO-GRANDE.jpg',   // grande photo (à gauche)
        'https://COLLER-ICI-URL-PHOTO-PETITE.jpg'    // petite photo (à droite, plus bas)
      ],
      script: ['Let’s', 'get', 'married !'],
      // scriptImage: 'https://...png',   // option : image du texte manuscrit à la place
      statement: [
        "Chaque projet naît d’un échange.",
        "Un moment pour comprendre votre histoire, vos envies, et ce que vous souhaitez créer.",
        "Nous imaginons ensuite une présence florale qui s’inscrit dans le lieu, accompagne les différents temps et se prolonge dans les détails."
      ],
      text: [
        "Pour vous guider dans votre projet, nous avons conçu un menu avec toutes les prestations dont vous pourriez avoir besoin.",
        "N’hésitez pas à prendre contact avec nous via notre formulaire, nous reviendrons vers vous sous 24h."
      ]
    },

    // Menu des prestations, posé sur l'image de fond (collage papier)
    { type: 'menu',
      background: 'https://COLLER-ICI-URL-FOND-MENU.jpg',
      title: 'Menu des prestations',
      items: [
        { label: 'Bouquet de mariée',                     price: 'à partir de 80 €' },
        { label: 'Bouquet de demoiselle d’honneur',       price: 'à partir de 40 €' },
        { label: 'Boutonnière',                           price: 'à partir de 20 €' },
        { label: 'Bout de banc',                          price: 'à partir de 15 €' },
        { label: 'Décors d’allée (compositions au sol)',  price: 'à partir de 90 €' },
        { label: 'Arche ou structure florale',            price: 'à partir de 500 €' },
        { label: 'Composition d’accueil',                 price: 'à partir de 200 €' },
        { label: 'Soliflore fleuri',                      price: 'à partir de 20 €' },
        { label: 'Centre de table',                       price: 'à partir de 60 €' },
        { label: 'Décors de buffet & bar',                price: 'à partir de 120 €' },
        { label: 'Sculpture florale',                     price: 'à partir de 150 €' },
        { label: 'Locations de contenant',                price: 'sur demande' },
        { label: 'Créations spécifiques ou configuration particulière', price: 'sur demande' }
      ]
    }
  ]
});
