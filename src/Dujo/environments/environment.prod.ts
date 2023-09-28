export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.muebleriadujo.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/Logo.png',
  logoWhite: 'assets/images/Logo.png',
  logoFooter: 'assets/images/Logo.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.muebleriadujo.com/',
  urlAboutUs: 'https://www.muebleriadujo.com/',

  address: 'Mueblerías Dujo',
  localDatabaseUsers: true,

  contacts: {
    phone: '+53 5 2113193',
    email: 'direccion@dujo.cu',
    address: 'Calle 26 esquina A 41 No. 258. Vedado.',
  },

  adminService: 'https://admin.muebleriadujo.com/',
  mainDomain: '.muebleriadujo.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjYwLCJpZCI6NjAsImRhdGUiOiIyMDIyLTEyLTIyVDEzOjI3OjEyLjY3NVoiLCJuYW1lIjoiTXVlYmxlcmlhc0R1am8iLCJlbWFpbCI6ImRpcmVjY2lvbkBkdWpvLmN1In0sImlhdCI6MTY3MTcxNTYzMn0.naSHWevV3v--E1PZIU7vRoiJlhFPEm5eCQMByxeSxlA',

  meta: {
    mainPage: {
      title: 'Mueblerías Dujo',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online',
      shareImg: 'https://www.muebleriadujo.com/assets/images/share-img.png',
      url: 'https://www.muebleriadujo.com/',
    },
  },
};
