const PASARELA_BASE = 'peoplegoto';

const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/GC.png',
  logoWhite: 'assets/images/GC.png',
  logoFooter: 'assets/images/GC.png',

  limitSearch: 42,

  showPoweredBy: true,

  showLocation: false,

  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://tiendasgrancomercial.com/',
  urlAboutUs: 'https://tiendasgrancomercial.com/',

  address: 'Tiendas Gran Comercial',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://www.admin.tiendasgrancomercial.com/',
  mainDomain: '.tiendasgrancomercial.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjczLCJpZCI6NzMsImRhdGUiOiIyMDIzLTAyLTExVDE4OjAxOjQwLjY0OVoiLCJuYW1lIjoiR3JhbiBDb21lcmNpYWwiLCJlbWFpbCI6ImFkbWluQGdyYW5jb21lcmNpYWwuY29tIn0sImlhdCI6MTY3NjEzODUwMH0.4FcaWBoWxS03fiLzzzG5_i63eGwx9ZwpFGkdkvKj2QM',

  meta: {
    mainPage: {
      title: 'Tienda Guajitech DEV',
      description:
        'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.tiendasgrancomercial.com/assets/images/share-img.png',
      url: 'https://www.tiendasgrancomercial.com/',
    },
  },
};

module.exports = {
  PASARELA_BASE,
  environment,
};
