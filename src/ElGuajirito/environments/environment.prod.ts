export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.elguajirito.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/guajirito/logos/Logo Guajirito Blanco.png',
  logoWhite: 'assets/images/guajirito/logos/Logo Guajirito Blanco.png',
  logoFooter: 'assets/images/guajirito/logos/Logo Guajirito Blanco.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.elguajirito.com/',
  urlAboutUs: 'https://www.elguajirito.com/',

  contacts: {
    phone: '(+53) 862 27 60 ext. 2 / 3',
    email: 'dir.comercial@elguajirito.com',
    address: 'Zulueta 660/ Apocada y Gloria La Habana, Cuba 10100.',
  },

  address: 'El Guajirito',
  localDatabaseUsers: true,

  adminService: 'https://admin.elguajirito.com/',
  mainDomain: '.elguajirito.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjU2LCJpZCI6NTYsImRhdGUiOiIyMDIyLTEyLTA0VDAyOjM2OjU2Ljk3M1oiLCJuYW1lIjoiRWxHdWFqaXJpdG8iLCJlbWFpbCI6Im1pY2hlbC5hbWFkb3JAZWxndWFqaXJpdG8uY29tIn0sImlhdCI6MTY3MDEyMTQxNn0.lpVXbWMPFtzO1DV-mChwViiICOzLtBjHVQL6J6Stals',

  meta: {
    mainPage: {
      title: 'El Guajirito',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.elguajirito.com/assets/images/share-img.jpg',
      url: 'https://www.elguajirito.com/',
    },
  },
};
