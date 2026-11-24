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
  tidySiteTitle: true,            // remet le titre « SHOP » de Site Creator au style du site
  shopCategoriesOnTop: true,      // liste des catégories (« Couronnes ») au-dessus des photos, à gauche
  shopHideCategoryTiles: true,    // masque les vignettes de catégories sous « Montrer tous les produits »

  header: {                       // en-tête blanc, menu foncé
    background: '#ffffff',
    textColor: '#1f1f1f'
  },

  // Pas de titre ici : la page Site Creator affiche déjà le sien (« SHOP »)
  blocks: []
});
