/*
  Page Shop — adresse : /shop
  Boutique OUVERTE : titre « SHOP » d'ici, puis le module boutique de Site Creator
  (produits, panier, paiement), habillé aux couleurs du site (styles.css > « Boutique »).

  Pour revenir à la page « bientôt » : remettre le contenu de shop-bientot
  (historique GitHub, version précédente de ce fichier).
*/
Plurielles.page({
  layout: 'blocks',
  texture: false,                 // fond blanc uni
  keepSiteCreator: true,          // on garde le contenu Site Creator (le module boutique)
  bodyClass: 'flo-shop',          // active l'habillage de la boutique dans styles.css

  header: {                       // en-tête blanc, menu foncé
    background: '#ffffff',
    textColor: '#1f1f1f'
  },

  blocks: [
    { type: 'title', text: 'Shop' }
  ]
});
