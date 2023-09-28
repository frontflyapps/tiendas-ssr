const packageJson = require('../../package.json');
export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.mibulevar.com/v1/',
  imageUrl: 'https://cdn.mibulevar.com/tienda/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',

  logo: 'assets/images/logo-navbar.png',
  logoWhite: 'assets/images/logo-navbar.png',
  logoFooter: 'assets/images/logo-navbar.png',

  limitSearch : 42,

  showPoweredBy: true,

  showLocation: true,


  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.mibulevar.com/',
  urlAboutUs: 'https://www.mibulevar.com/',

  address: 'MiBulevar | Transfermóvil',
  localDatabaseUsers: true,

  contacts: {
    email: 'bulevar@etecsa.cu',
    address: 'Centro de Negocios Miramar, Edificio Barcelona oficina 201, Miramar, Playa.',
  },

  adminService: 'https://admin.mibulevar.com/',
  mainDomain: '.mibulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjE5LCJpZCI6MTksImRhdGUiOiIyMDIyLTAyLTE4VDAzOjU4OjU4LjAyMFoiLCJuYW1lIjoiQWxjYW5zYW4iLCJlbWFpbCI6InBydWViYUBwcnVlYmEuY29tIn0sImlhdCI6MTY0NTE1NjczOH0.BxLAokzCQVZ39oomFZ3wxksib2htV5dfkqi4DlaHR0c',

  meta: {
    mainPage: {
      title: 'MiBulevar | Transfermóvil',
      description: 'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online',
      shareImg: 'https://www.mibulevar.com/assets/images/share-img.jpg',
      url: 'https://www.mibulevar.com/',
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
