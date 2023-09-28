const packageJson = require('../../package.json');
export const PASARELA_BASE = 'peoplegoto';
export const environment = {
  production: true,

  apiUrl: 'https://api.mibulevar.com/v1/',
  imageUrl: 'https://cdn.mibulevar.com/tienda/',

  defaultLanguage: 'es',
  currencyInternational: 'USD',
  logo: 'assets/images/logo-footer.png',
  logoWhite: 'assets/images/logo-login.png',
  logoFooter: 'assets/images/logo-navbar.png',

  limitSearch : 42,

  showPoweredBy: true,

  showLocation: true,


  timeToResetSession: 14400000, // (4hrs) Time to reset the session (ms)
  timeToResearchProductData: 300000, // (5min) Time to research products (ms)
  timeToResearchLandingPageData: 1800000, // (30min) Time to research landing-page (ms)
  timeToResearchMenuData: 300000, // (30min) Time to research menu (ms)
  timeToResearchCategoriesData: 600000, // (10min) Time to research categories (ms)

  url: 'https://www.ofa.mibulevar.com',
  urlAboutUs: 'https://www.ofa.mibulevar.com',

  address: 'OFA | Tienda Online de la Oficina de Facilitación al Pago de la Contribución',
  localDatabaseUsers: true,

  contacts: {
    phone: '(+53) 7 8697223',
    email: 'facilitacion@ofa.ohc.cu',
    address: 'Calle Obispo No. 306 planta baja entre Habana y Aguiar. La Habana Vieja',
  },

  adminService: 'https://admin.mibulevar.com/',
  mainDomain: '.ofa.mibulevar.com',

  tokenBusiness:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjI4LCJpZCI6MjgsImRhdGUiOiIyMDIyLTAzLTIzVDIwOjI0OjI0LjA0M1oiLCJuYW1lIjoiT0ZBIiwiZW1haWwiOiJmYWNpbGl0YWNpb25Ab2ZhLm9oYy5jdSJ9LCJpYXQiOjE2NDgwNjcwNjR9.NCNuaC7qd1gFDw5pmMxLi75Z7DUxjjY6HKs9ZD76HHM',

  meta: {
    mainPage: {
      title: 'OFA | Tienda Online de la Oficina de Facilitación al Pago de la Contribución',
      description: 'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
      keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, Sin Cola, comercio online',
      shareImg: 'https://www.ofa.mibulevar.com/assets/images/share-img.png',
      url: 'https://www.ofa.mibulevar.com/',
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
