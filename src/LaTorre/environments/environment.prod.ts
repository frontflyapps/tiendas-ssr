const packageJson = require('../../package.json');
export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.tiendaspalmares.com/v1/',
  imageUrl: 'https://cdntienda.tiendaspalmares.com/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/Icono_Navbar.svg',
  logoWhite: 'assets/images/Icono_Navbar.svg',
  logoFooter: 'assets/images/Logotipo_(Footer).svg',

  limitSearch : 42,

  showPoweredBy: true,

  showLocation: true,


  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.restaurantbarlatorre.com/',
  urlAboutUs: 'https://www.restaurantbarlatorre.com/',

  address: 'Tienda GuajiTech DEV',
  localDatabaseUsers: true,

  contacts: {
    phone: '',
    email: '',
    address: '',
  },

  adminService: 'https://admin.tiendaspalmares.com/',
  mainDomain: '.restaurantbarlatorre.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEyLCJpZCI6MTIsImRhdGUiOiIyMDIzLTAzLTEwVDA0OjA3OjU4LjMyOFoiLCJuYW1lIjoiQmFyUmVzdGF1cmFudGUgTGEgVG9ycmUiLCJlbWFpbCI6InJycHBAbGF0b3JyZS5jaGEudHVyLmN1In0sImlhdCI6MTY3ODQyMTI3OH0.Wqdw-irx2rCU3xaCRDJggwRzsEs7OHi5WwLee5017js',

  meta: {
    mainPage: {
      title: 'Restaurante-Bar La Torre',
      description: 'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
      shareImg: 'https://www.restaurantbarlatorre.com/assets/images/share-img.png',
      url: 'https://www.restaurantbarlatorre.com/',
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
