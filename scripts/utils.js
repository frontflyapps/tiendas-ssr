/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const packageJson = require('../package.json');
const fs = require('fs');

const useApiTest = true;

const appName = process.env.NG_APP_NAME || process.env.STORYBOOK_APP_NAME;

const environmentFactory = (overrides) => {
  return {
    production: false,

    defaultLanguage: '',
    currencyInternational: '',
    logo: '',
    logoWhite: '',
    logoFooter: '',

    limitSearch: 0,

    showPoweredBy: true,

    showLocation: true,

    timeToResetSession: 0,
    timeToResearchProductData: 0,
    timeToResearchLandingPageData: 0,
    timeToResearchMenuData: 0,
    timeToResearchCategoriesData: 0,

    url: '',
    urlAboutUs: '',

    address: '',
    localDatabaseUsers: true,

    contacts: {
      phone: '',
      email: '',
      address: '',
    },

    adminService: '',
    mainDomain: '',

    tokenBusiness: '',

    meta: {
      mainPage: {
        title: '',
        description: '',
        keywords: '',
        shareImg: '',
        url: '',
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
    apiUrl: '',
    imageUrl: '',

    ...overrides,

    ...(useApiTest
      ? {
          address: 'Tienda Guajiritos',

          meta: {
            mainPage: {
              title: 'Tienda Guajiritos',
              description:
                'Tienda online desarrollada con el framework Angular permite la modelación de negocios B2C and C2C',
              keywords: 'HTML, CSS, JavaScript, Angular, Tienda Online B2B, comercio online',
              shareImg: 'https://guajiritos.com/assets/images/share-img.png',
              url: 'https://www.tienda.guajiritos.com/',
            },
          },

          tokenBusiness:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7IkJ1c2luZXNzSWQiOjEsImlkIjoxLCJkYXRlIjoiMjAyMS0wOS0xM1QwMTo0NToxOC4wMDBaIiwibmFtZSI6IlRpZW5kYSIsImVtYWlsIjoidGllbmRhQGxvY2FsaG9zdC5jb20ifSwiaWF0IjoxNjMxNDk3NTkxfQ.FF5-276rI9SJmtebVo0spV8Y2wdOZPok7LlUxtTDwh0',
          apiUrl: 'https://api.guajiritos.com/v1/',
          imageUrl: 'https://cdntienda.guajiritos.com/',
          mainDomain: 'tienda.guajiritos.com', // necessary to test cookies(it does not work neither)
          logo: 'assets/images/guajiritos/guajiritos-Logo-blanco.png',
          logoWhite: 'assets/images/guajiritos/guajiritos-Logo-blanco.png',
          logoFooter: 'assets/images/guajiritos/guajiritos-Logo-blanco.png',
        }
      : {}),
  };
};

function getFiles(path, files = []) {
  const stats = fs.statSync(path);

  if (stats.isFile()) {
    files.push(path);
  }

  if (stats.isDirectory()) {
    const fileList = fs.readdirSync(path);
    for (const file of fileList) {
      getFiles(`${path}/${file}`, files);
    }
  }

  return files;
}

module.exports = {
  environmentFactory,
  appName,
  getFiles,
};
