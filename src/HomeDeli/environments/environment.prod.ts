export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/Group_7406b.svg',
  logoWhite: 'assets/images/Recurso_1a.svg',
  logoFooter: 'assets/images/Group_7406b.svg',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://homedeli.pymesbulevar.com/',
  urlAboutUs: 'https://homedeli.pymesbulevar.com/',

  address: 'Home Deli',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://adminhomedeli.pymesbulevar.com/',
  mainDomain: '.homedeli.pymesbulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjYyLCJpZCI6NjIsImRhdGUiOiIyMDIzLTAxLTA5VDIyOjQ5OjM2LjYwM1oiLCJuYW1lIjoiSG9tZURlbGkiLCJlbWFpbCI6ImhvbWVkZWxpbWVyY2Fkb0BnbWFpbC5jb20ifSwiaWF0IjoxNjczMzA0NTc2fQ.DBaDAAN4ssKmCQ-JSm4ygm8M2DMJ8FwC9BNjzma7xRQ',

  meta: {
    mainPage: {
      title: 'Home Deli',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.homedeli.pymesbulevar.com/assets/images/share-img.png',
      url: 'https://www.homedeli.pymesbulevar.com/',
    },
  },
};
