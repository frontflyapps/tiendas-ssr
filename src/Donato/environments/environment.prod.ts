const packageJson = require('../../package.json');
export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.ddonatofood.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',

  logo: 'assets/images/logo-blanco.svg',
  logoWhite: 'assets/images/logo-blanco.svg',
  logoFooter: 'assets/images/logo-footer.svg',

  limitSearch : 42,

  showPoweredBy: true,

  showLocation: false,


  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.ddonatofood.com/',
  urlAboutUs: 'https://www.ddonatofood.com/',

  address: 'd\'Donato',
  localDatabaseUsers: true,

  contacts: {
    phone: '+53 5 6359083',
    email: 'donatomegavol@gmail.com',
    address: 'Línea No.756 B e/Paseo y 2, Plaza de la Revolución, La Habana',
  },

  adminService: 'https://admin.pymesbulevar.com/',
  mainDomain: '.ddonatofood.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjU5LCJpZCI6NTksImRhdGUiOiIyMDIyLTEyLTE5VDIxOjQ2OjA5Ljg3MFoiLCJuYW1lIjoiZERvbmF0byIsImVtYWlsIjoiZG9uYXRvbWVnYXZvbEBnbWFpbC5jb20ifSwiaWF0IjoxNjcxNDg2MzY5fQ.f6TfFmdzKfx-GmbhwrcJ1q13meqQTSSgQit2wmm9aiM',

  meta: {
    mainPage: {
      title: 'd\'Donato',
      description: 'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online',
      shareImg: 'https://www.ddonatofood.com/assets/icons/share-img.png',
      url: 'https://www.ddonatofood.com/',
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
