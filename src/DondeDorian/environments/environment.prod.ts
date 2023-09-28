export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.doriancuba.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/Logo_Dorian_Cuba.svg',
  logoWhite: 'assets/images/Logo_Dorian_Cuba.svg',
  logoFooter: 'assets/images/Logo_Dorian.svg',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.doriancuba.com/',
  urlAboutUs: 'https://www.doriancuba.com/',

  address: 'Donde Dorian',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.doriancuba.com/',
  mainDomain: '.doriancuba.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjQ3LCJpZCI6NDcsImRhdGUiOiIyMDIyLTEwLTMxVDAzOjI1OjEzLjY5MFoiLCJuYW1lIjoiYXNkc2EiLCJlbWFpbCI6InZlbnRhc0Bkb25kZWRvcmlhbnByb2Zlc2lvbmFsLmNvbSJ9LCJpYXQiOjE2NjcxODY3MTN9.s4ZXLHYV68Tt-_M3xuo8V8X4KFn4RgP_2MIVD1JAYhc',

  meta: {
    mainPage: {
      title: 'DondeDorian',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.doriancuba.com/assets/images/share-img.png',
      url: 'https://www.doriancuba.com/',
    },
  },
};
