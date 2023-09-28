const packageJson = require('../../package.json');
export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://apitienda.cislapradera.com/v1/',
  imageUrl: 'https://cdntienda.cislapradera.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-gray.png',
  logoWhite: 'assets/images/logo-gray.png',
  logoFooter: 'assets/images/logo-gray-footer.png',

  limitSearch : 42,

  showPoweredBy: true,

  showLocation: true,


  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://tienda.cislapradera.com/',
  urlAboutUs: 'https://tienda.cislapradera.com/',

  address: 'La Pradera',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admintienda.cislapradera.com/',
  mainDomain: '.tienda.cislapradera.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEsImlkIjoxLCJkYXRlIjoiMjAyMS0wOS0xM1QwMTo0NToxOC4wMDBaIiwibmFtZSI6IlRpZW5kYSIsImVtYWlsIjoidGllbmRhQGxvY2FsaG9zdC5jb20ifSwiaWF0IjoxNjMxNDk3NTkxfQ.FF5-276rI9SJmtebVo0spV8Y2wdOZPok7LlUxtTDwh0',

  meta: {
    mainPage: {
      title: 'La Pradera',
      description: 'Tienda online del Centro Internacional de Salud.',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://tienda.cislapradera.com/assets/images/share-img.png',
      url: 'https://tienda.cislapradera.com/',
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
