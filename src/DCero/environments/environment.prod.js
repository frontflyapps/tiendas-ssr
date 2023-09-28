export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/Group_7384.svg',
  logoWhite: 'assets/images/Group_7384.svg',
  logoFooter: 'assets/images/Group_7384.svg',
  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://dcero.pymesbulevar.com/',
  urlAboutUs: 'https://dcero.pymesbulevar.com/',

  address: "Tienda D'Cero",
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.pymesbulevar.com/',
  mainDomain: '.dcero.pymesbulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjQ5LCJpZCI6NDksImRhdGUiOiIyMDIyLTExLTAzVDE4OjQ1OjQ3Ljk1OVoiLCJuYW1lIjoiRCdDZXJvICIsImVtYWlsIjoicGRsYWNlcm9AZ21haWwuY29tIn0sImlhdCI6MTY2NzUwMTE0N30.pGqgjH6109qYLM8tL23qryiDrb-nj1dzLV5woXM-Kn8',

  meta: {
    mainPage: {
      title: "Tienda D'Cero",
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://dcero.pymesbulevar.com/assets/images/share-img.png',
      url: 'https://dcero.pymesbulevar.com/',
    },
  },
};
