export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.mibulevar.com/v1/',
  imageUrl: 'https://cdntienda.mibulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-white.png',
  logoWhite: 'assets/images/logo-white.png',
  logoFooter: 'assets/images/logo-white.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://restconstelaciones.mibulevar.com/',
  urlAboutUs: 'https://restconstelaciones.mibulevar.com/',

  address: 'Tiendas Constelaciones',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.mibulevar.com/',
  mainDomain: '.restconstelaciones.mibulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEwNiwiaWQiOjEwNiwiZGF0ZSI6IjIwMjMtMDYtMjZUMTg6Mzc6NTkuMjEzWiIsIm5hbWUiOiJUaWVuZGEgVmlydHVhbCBVRUIgR3JhbiBSZXN0YXVyYW50ZSBDb25zdGVsYWNpb25lcyIsImVtYWlsIjoiY29uc3RlbGFjaW9uZXNAZ2VjaC5jby5jdSJ9LCJpYXQiOjE2ODc4MDQ2Nzl9.W7922ougMD3rgNoy9h00KiD5Q8OLaVQYYvILIGue_q0',

  meta: {
    mainPage: {
      title: 'Tiendas Constelaciones',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://restconstelaciones.mibulevar.com/assets/images/share-img.png',
      url: 'https://restconstelaciones.mibulevar.com/',
    },
  },
};
