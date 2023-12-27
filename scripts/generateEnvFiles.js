var fs = require('fs');
const packageJson = require('../package.json');
const { exec } = require('child_process');
const { getFiles } = require('./utils');

const environmentFactory = (overrides) => {
  const prod = process.env.PROD || 'false';

  const useApiTest = prod === 'false';

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

const createEnvironmentsFolder = async () => {
  const path = './environments';

  return new Promise((resolve) => {
    fs.access(path, (error) => {
      // To check if the given directory
      // already exists or not
      if (error) {
        // If current directory does not exist
        // then create it
        fs.mkdir(path, (error) => {
          if (error) {
            console.log(error);
          } else {
            resolve();
            // console.log('New Directory created successfully !!');
          }
        });
      } else {
        resolve();
        // console.log('Given Directory already exists !!');
      }
    });
  });
};

function generateDevEnvironments(appName) {
  if (!appName) return;

  const {
    environment: override = {},
    PASARELA_BASE,
  } = require(`../src/${appName}/environments/environment`);

  const environment = environmentFactory(override);

  const content = `export const PASARELA_BASE = '${PASARELA_BASE}';
  
  export const environment = ${JSON.stringify(
    {
      appName,
      ...environment,
    },
    null,
    2,
  )};
    
`;

  fs.writeFile('./environments/environment.ts', content, function (err, result) {
    if (err) console.log('error', err);
  });
}

function generateProdEnvironments(appName) {
  if (!appName) return;

  const {
    environment: override = {},
    PASARELA_BASE,
  } = require(`../src/${appName}/environments/environment.prod`);

  const environment = environmentFactory(override);

  const content = `export const PASARELA_BASE = '${PASARELA_BASE}';
    
    export const environment = ${JSON.stringify(
      {
        appName,
        ...environment,
      },
      null,
      2,
    )};
      
  `;

  fs.writeFile('./environments/environment.prod.ts', content, function (err, result) {
    if (err) console.log('error', err);
  });
}

const generateEnvFiles = async (name) => {
  await createEnvironmentsFolder();

  generateDevEnvironments(name);
  generateProdEnvironments(name);

  const envFilenames = getFiles('./environments');

  envFilenames.forEach((filename) => {
    exec(`node ./node_modules/.bin/prettier --write ${filename}`);
  });
};

module.exports = {
  generateEnvFiles,
};
