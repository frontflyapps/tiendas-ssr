export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.mibulevar.com/v1/',
  imageUrl: 'https://cdn.mibulevar.com/tienda/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',

  logo: 'assets/images/logo-login.png',
  logoWhite: 'assets/images/logo-login.png',
  logoFooter: 'assets/images/logo-navbar.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: true,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.genesis.mibulevar.com',
  urlAboutUs: 'https://www.genesis.mibulevar.com',

  address: 'Génesis | Galerías de Arte',
  localDatabaseUsers: true,

  contacts: {
    phone: '+5359955174\n' + '+5359959794\n' + '+5372065252',
    email: 'ecommerce4genesis@gmail.com / comex@genesis.cult.cu',
    address: 'Oficina Central, Calle 18 No. 513 entre 7ma y 5ta, Miramar, Playa, La Habana, Cuba',
  },

  adminService: 'https://admin.mibulevar.com/',
  mainDomain: '.mibulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjM1LCJpZCI6MzUsImRhdGUiOiIyMDIyLTA1LTE4VDAyOjU3OjQ5LjYyOFoiLCJuYW1lIjoiR2VuZXNpcyIsImVtYWlsIjoidGVzdEB0ZXN0LnRlc3QifSwiaWF0IjoxNjUyODQyNjY5fQ.adKPXWKKoIQ5J32qxhvUiADeKkdSgHQtVKkfS3ywMGU',

  meta: {
    mainPage: {
      title: 'Génesis | Galerías de Arte',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online',
      shareImg: 'https://www.genesis.mibulevar.com/assets/images/share-img.png',
      url: 'https://www.genesis.mibulevar.com/',
    },
  },
};
