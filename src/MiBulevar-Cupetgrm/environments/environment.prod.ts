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

  url: 'https://cupetgrm.mibulevar.com',
  urlAboutUs: 'https://cupetgrm.mibulevar.com',

  address: 'UEB Division Territorial Combustible Granma | TransferMóvil',
  localDatabaseUsers: true,

  contacts: {
    phone: '(+53) 52879308',
    email: 'pagoelectronico@ecltu.cupet.cu',
    address: 'Carretera Central km4 1/2  San Antonio Las Tunas. Cuba.',
  },

  adminService: 'https://admin.mibulevar.com/',
  mainDomain: '.mibulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjcyLCJpZCI6NzIsImRhdGUiOiIyMDIyLTA5LTA3VDE3OjExOjQzLjY5MloiLCJuYW1lIjoiVUVCIERpdmlzaW9uIFRlcnJpdG9yaWFsIENvbWJ1c3RpYmxlIEdyYW5tYSIsImVtYWlsIjoiYWxleGlzQGVjZ3JtLmN1cGV0LmN1In0sImlhdCI6MTY2MjU3MDcwM30.vwCtUg8EOWTGi2ZqD3K85TC-1UEaEN0VwPWFZrtDxaQ',

  meta: {
    mainPage: {
      title: 'UEB Division Territorial Combustible Granma  | TransferMóvil',
      description: 'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online',
      shareImg: 'https://cupetgrm.mibulevar.com/assets/images/share-img.png',
      url: 'https://cupetgrm.mibulevar.com/',
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
