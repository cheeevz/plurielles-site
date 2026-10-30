/*
  Page Shop — adresse : /shop

  EN ATTENDANT L'OUVERTURE : page « bientôt » ci-dessous.

  QUAND LA BOUTIQUE OUVRE : remplacer tout le contenu de Plurielles.page({...}) par
    texture: false,
    keepSiteCreator: true,
    header: { background: '#ffffff', textColor: '#1f1f1f' }
  pour afficher le module boutique de Site Creator avec l'en-tête du site.
*/
Plurielles.page({
  layout: 'blocks',
  texture: false,                 // fond blanc uni, sans texture

  header: {                       // en-tête blanc, menu foncé
    background: '#ffffff',
    textColor: '#1f1f1f'
  },

  blocks: [

    { type: 'title', text: 'Shop' },

    { type: 'text', paragraphs: [
      "Notre boutique en ligne ouvre bientôt : vases, couronnes de Noël et créations de saison, à commander directement ici.",
      "En attendant, pour toute commande, écrivez-nous : nous vous répondons sous 24h."
    ]},

    { type: 'links', items: [
      { label: 'Nous écrire',                 url: '/contact' },
      { label: 'hello@studioplurielles.fr',   url: 'mailto:hello@studioplurielles.fr' },
      { label: 'Instagram @plurielles_studio', url: 'https://www.instagram.com/plurielles_studio/' }
    ]}
  ]
});
