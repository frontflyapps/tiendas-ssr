const packageJson = require('../../package.json');
export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.pymesbulevar.com/v1/',
  imageUrl: 'https://cdntienda.opticastheia.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-white-new.png',
  logoWhite: 'assets/images/logo-white-large-new.png',
  logoFooter: 'assets/images/logo-white-new.png',

  limitSearch : 42,

  showPoweredBy: true,

  showLocation: false,


  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.opticastheia.com/',
  urlAboutUs: 'https://www.opticastheia.com/',

  address: 'Ópticas Theia',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.opticastheia.com/',
  mainDomain: '.opticastheia.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjExNywiaWQiOjExNywiZGF0ZSI6IjIwMjMtMDUtMTVUMTU6Mjc6NTYuMTg5WiIsIm5hbWUiOiLDk3B0aWNhcyBUaGVpYSIsImVtYWlsIjoiY2FybG9zLnNhbnRhbmFAZ3VhamlyaXRvcy5jb20ifSwiaWF0IjoxNjg0MTY0NDc2fQ.fWmzcPO-tDJvgyt__xBb-Y15BSaHbdgYTjcs8nRMhHY',

  meta: {
    mainPage: {
      title: 'Ópticas Theia',
      description: 'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.opticastheia.com/assets/images/share-img.png',
      url: 'https://www.opticastheia.com/',
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
