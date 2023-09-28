export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.mibulevar.com/v1/',
  imageUrl: 'https://cdn.mibulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',

  logo: 'assets/images/mibulevar/patrimonio/logo.jpeg',
  logoWhite: 'assets/images/mibulevar/patrimonio/logo.jpeg',
  logoFooter: 'assets/images/mibulevar/patrimonio/logo.jpeg',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: true,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.tiendaspatrimonio.mibulevar.com',
  urlAboutUs: 'https://www.tiendaspatrimonio.mibulevar.com',

  address: 'Tiendas Patrimonio | Transfermóvil',
  localDatabaseUsers: true,

  contacts: {
    phone: '(+53) 7801 2743',
    email: 'wilber@gdp.ohc.cu',
    address: 'Calle Narciso López No. 3 entre Enna y Avenida del Puerto. Apto. 105',
  },

  adminService: 'https://admin.mibulevar.com/',
  mainDomain: '.mibulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjYsImlkIjo2LCJkYXRlIjoiMjAyMS0xMS0wN1QyMjozNDoyOC41MzBaIiwibmFtZSI6Ikdlc3Rpb24gZGVsIFBhdHJpbW9uaW8iLCJlbWFpbCI6IndpbGJlckBnZHAub2hjLmN1In0sImlhdCI6MTYzNjMyNDQ2OH0.YD1E_9n2ortJAkBRaCdJpwabMIWvdLRscYHBaTUm8E4',

  meta: {
    mainPage: {
      title: 'Tiendas Patrimonio | Transfermóvil',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online',
      shareImg: 'https://www.tiendaspatrimonio.mibulevar.com/assets/images/share-img.png',
      url: 'https://www.tiendaspatrimonio.mibulevar.com/',
    },
  },
};
