// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const packageJson = require('../../package.json');

// peopleGoTo | transfermovil | bidaiondo
export const PASARELA_BASE = 'peoplegoto';

export const environment = {
  production: false,

  // apiUrl: 'https://api.mibulevar.com/v1/',
  // imageUrl: 'https://api.mibulevar.com/v1/',

  // apiUrl: 'https://apitienda.guajiritos.com/v1/',
  // imageUrl: 'https://apitienda.guajiritos.com/v1/',

  apiUrl: 'https://apitienda.marinasmarlin.com/v1/',
  imageUrl: 'https://cdn.marinasmarlin.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logos/marlin/azul/Logo-Marlin-192.png',
  logoWhite: 'assets/images/logo-wout-gen-white.png',
  logoFooter: 'assets/images/logo.png',

  limitSearch : 42,

  showPoweredBy: true,

  showLocation: true,

  timeToResetSession: 14400000, // Time to reset the session (ms)
  timeToResearchProductData: 10000, // Time to research products (ms)
  timeToResearchLandingPageData: 10000, // Time to research products (ms)
  timeToResearchMenuData: 10000, // Time to research products (ms)
  timeToResearchCategoriesData: 10000, // Time to research categories (ms)

  // url: 'http://tienda.tiendalocal.com:4308',
  // urlAboutUs: 'http://tienda.tiendalocal.com:4308',

  url: 'http://tienda.tiendalocal.com:4308',
  urlAboutUs: 'http://tienda.tiendalocal.com:4308',

  address: 'Tiendas Marinas Marlin',
  localDatabaseUsers: true,

  contacts: {
    phone: '(+53) 7202 1381',
    email: 'tienda@marinasmarlin.com',
    address: 'Calle 2, esq 7ma, Miramar, Playa',
  },

  adminService: 'http://admintienda.tiendalocal.com/',
  mainDomain: '.tiendalocal.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEsImlkIjoxLCJkYXRlIjoiMjAyMS0wNy0yMFQwMTo1NTozNC4wMDBaIiwibmFtZSI6IlRpZW5kYSIsImVtYWlsIjoidGllbmRhQGxvY2FsaG9zdC5jb20ifSwiaWF0IjoxNjI2NzQ2MTgzfQ.IgqpAt3ji4H5cPDKMavybmpMhibe31JDl9RJ2znQWk8',

  meta: {
    mainPage: {
      title: 'Tiendas Marinas Marlin',
      description: 'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://tienda.marinasmarlin.com/assets/images/share-img.png',
      url: 'https://tienda.marinasmarlin.com/',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/**
 * Esto es la tienda Online B2b De Guajiritos
 */
