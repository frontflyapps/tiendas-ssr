const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.mibulevar.com/v1/',
  imageUrl: 'https://cdn.mibulevar.com/tienda/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo_epueblo_w.png',
  logoWhite: 'assets/images/logo_epueblo_w.png',
  logoFooter: 'assets/images/logo_epueblo_w.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: true,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://epueblo.mibulevar.com',
  urlAboutUs: 'https://epueblo.mibulevar.com',

  address: 'Avenida 3a. No. 4601 e/ 46 y 60, Playa, La Habana, Cuba',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admintienda.guajiritos.com/',
  mainDomain: '.tienda.guajiritos.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEwLCJpZCI6MTAsImRhdGUiOiIyMDIxLTExLTI4VDIyOjM3OjU5LjQ4N1oiLCJuYW1lIjoiRWRpdG9yaWFsIFB1ZWJsbyB5IEVkdWNhY2nDs24iLCJlbWFpbCI6ImVwZUBlbmV0LmN1In0sImlhdCI6MTYzODEzOTA3OX0.1172XlD4IgPbpFw2XWb5IUtA0dNmn5wRIij4Dsp3oUY',

  meta: {
    mainPage: {
      title: 'Editorial Pueblo y Educación',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online',
      shareImg: 'https://www.epueblo.mibulevar.com/assets/images/share-img.png',
      url: 'https://www.epueblo.mibulevar.com/',
    },
  },
};


module.exports = {
  PASARELA_BASE,
  environment,
};