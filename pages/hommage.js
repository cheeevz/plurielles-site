/*
  Page Hommages — adresse : /hommage
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

    { type: 'title', text: 'Hommages' },

    { type: 'text', paragraphs: [
      "Nous abordons les hommages floraux avec une approche libre et créative, en nous affranchissant des codes traditionnels du fleurissement de deuil.",
      "Nous aimons composer avec les contrastes, mêler les fleurs fraîches aux éléments séchés, aux graminées et aux matières végétales.",
      "Jouer avec les textures, les lignes et les volumes pour imaginer des compositions qui dépassent les formes habituelles.",
      "Pour nous, les fleurs sont un langage à part entière. Elles permettent de raconter, d’évoquer un souvenir, de faire place à l’émotion.",
      "Chaque création est pensée comme un hommage personnel, où la liberté de composition rencontre la sensibilité de chaque histoire."
    ]},

    // Grande photo pleine largeur (le bouquet dans le champ)
    { type: 'image',
      image: 'https://studioplurielles.fr/data/files/pluriellesdeuilchamps16.png',
      position: '55%'             // cadrage vertical : 0% = haut, 100% = bas
    },

    // Vidéo à gauche, textes à droite
    { type: 'duo',
      video: 'https://COLLER-ICI-URL-VIDEO.mp4',
      // poster: 'https://...jpg',   // image affichée pendant le chargement de la vidéo
      // audio: 'https://...mp3',    // option : piste de chants d'oiseaux jouée à la place du son de la vidéo
      statement: [
        "Chaque hommage est pensé comme un projet de création à part entière. À partir de vos souhaits et de vos souvenirs, nous imaginons des compositions sur mesure, guidées par une recherche esthétique et une attention portée à chaque détail."
      ],
      text: [
        "Notre approche explore librement le langage floral. Nous mêlons fleurs fraîches, éléments séchés, graminées et matières végétales, jouons avec les contrastes, les textures et les palettes de couleurs. Nous réinterprétons les formes traditionnelles pour créer des compositions expressives, parfois sculpturales, qui ouvrent une autre voie au fleurissement des hommages."
      ]
    },

    { type: 'prices',
      title: 'Nos hommages floraux',
      items: [
        { label: 'Dessus de cercueil', price: 'à partir de 250 €',
          text: "Une composition unique et personnelle pensée pour accompagner le cercueil, travaillée dans ses volumes, ses lignes et ses nuances. Nous choisissons chacune des variétés avec soin, après avoir imaginé l’harmonie colorée." },
        { label: 'Bouquet', price: 'à partir de 150 €',
          text: "À offrir en hommage ou pour témoigner de son affection, il est travaillé de manière créative." },
        { label: 'Gerbe de fleurs', price: 'à partir de 150 €',
          text: "Une composition tout en longueur, structurée ou plus libre, qui privilégie le mouvement." },
        { label: 'Couronne', price: 'à partir de 200 €',
          text: "Une forme symbolique réinterprétée à travers un jeu de rythmes, de volumes et de matières végétales." },
        { label: 'Coupe de plantes', price: 'à partir de 70 €',
          text: "Une composition loin des standards : chaque plante est choisie pour son caractère et les émotions qu’elle suscite." },
        { label: 'Décors d’urne', price: 'à partir de 80 €',
          text: "Une composition imaginée autour de l’urne, où les fleurs et les végétaux viennent accompagner sa forme avec douceur et naturel." },
        { label: 'Devant de tombe', price: 'à partir de 580 €',
          text: "Un ensemble floral pensé pour habiller le lieu de recueillement, composé avec attention dans un équilibre de formes, de couleurs et de matières." }
      ],
      note: "Au-delà des compositions, nous imaginons des fleurissements d’ensemble, pensés comme de véritables mises en scène florales. Des installations et des décors qui viennent habiller les différents espaces de recueillement et accompagner chaque temps de la cérémonie (n’hésitez pas à nous en faire part dans le formulaire de contact)."
    },

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
      'https://COLLER-ICI-URL-PHOTO-11.jpg'
    ]}
  ]
});
