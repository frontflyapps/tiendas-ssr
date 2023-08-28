import { Environment } from './types';

import packageJson from '../package.json';

const useApiTest = true;

export const environmentFactory = (overrides: Partial<Environment>): Environment => {
  return {
    pasarelaBase: '',

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
          apiUrl: 'https://api.guajiritos.com/v1/',
          imageUrl: 'https://cdntienda.guajiritos.com/',
        }
      : {}),
  };
};
