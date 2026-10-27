/*
  Page Contact — adresse : /contact
  Mise en page : infos + image à gauche, formulaire Site Creator à droite
*/
Plurielles.page({
  layout: 'contact',

  // En-tête clair (comme À propos)
  header: {
    background: '#eeeeec',
    textColor: '#1f1f1f'
  },
  // logoImage: 'https://...',   // version du logo à typo foncée, quand elle existe

  // ----- Colonne de gauche -----
  title: 'Nous contacter',
  text: [
    "Pour toute demande d’information, de devis ou de commande, vous pouvez remplir le formulaire ci-contre ou nous écrire à l’adresse suivante :"
  ],
  email: 'hello@studioplurielles.fr',
  links: [
    { label: 'Instagram @plurielles_studio', url: 'https://www.instagram.com/plurielles_studio/' }
  ],

  // Image sous le bloc (l'enveloppe)
  image: 'https://COLLER-ICI-URL-DE-L-IMAGE-ENVELOPPE.png',
  imageAlt: 'Enveloppe Plurielles',

  // ----- Colonne de droite -----
  // Sélecteur CSS du bloc formulaire créé dans Site Creator (à récupérer avec l'inspecteur).
  // Tant qu'il est vide ou introuvable, le formulaire reste à sa place d'origine.
  formSelector: ''
});
