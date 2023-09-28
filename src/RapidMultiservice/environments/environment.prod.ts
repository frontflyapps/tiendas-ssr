const packageJson = require('../../package.json');
export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.pymesbulevar.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/LOGO-one.png',
  logoWhite: 'assets/images/LOGO-one.png',
  logoFooter: 'assets/images/LOGO-one.png',


  limitSearch : 42,

  showPoweredBy: true,

  showLocation: false,


  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://tiendarapidmultiservice.guajiritos.com/',
  urlAboutUs: 'https://tiendarapidmultiservice.guajiritos.com/',

  address: 'Rapid Multiservice | Tienda Online',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admintiendarapidmultiservice.guajiritos.com/',
  mainDomain: '.tiendarapidmultiservice.guajiritos.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjY3LCJpZCI6NjcsImRhdGUiOiIyMDIzLTAxLTMxVDE0OjMzOjMwLjI3MVoiLCJuYW1lIjoiRW1wcmVzYSBlcyBSQVBJRCBNdWx0aXNlcnZpY2UiLCJlbWFpbCI6InRhbWF5b21hcnRlbkBnbWFpbC5jb20ifSwiaWF0IjoxNjc1MTc1NjEwfQ._mNNJHJG608ZYSXLq-uldoKQgl1LKew3nylsv_fRO2s',

  meta: {
    mainPage: {
      title: 'Rapid Multiservice | La Agencia de la Familia Cubana',
      description: 'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://tiendarapidmultiservice.guajiritos.com/assets/images/share-img.png',
      url: 'https://tiendarapidmultiservice.guajiritos.com/',
    },
  },

  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    material: packageJson.dependencies['@angular/material'],
    rxjs: packageJson.dependencies.rxjs,
    ngxtranslate: packageJson.dependencies['@ngx-translate/core'],
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript'],
    tslint: packageJson.devDependencies['tslint'],
  },
};
