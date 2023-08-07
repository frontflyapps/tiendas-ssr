export interface Environment {
  // peopleGoTo | transfermovil | bidaiondo
  pasarelaBase: string;

  production: boolean;

  apiUrl: string;
  imageUrl: string;

  defaultLanguage: string;
  currencyInternational: string;
  logo: string;
  logoWhite: string;
  logoFooter: string;

  limitSearch: number;

  showPoweredBy: boolean;

  showLocation: boolean;

  timeToResetSession: number; // Time to reset the session (ms)
  timeToResearchProductData: number; // Time to research products (ms)
  timeToResearchLandingPageData: number; // Time to research products (ms)
  timeToResearchMenuData: number; // Time to research products (ms)
  timeToResearchCategoriesData: number; // Time to research categories (ms)

  url: string;
  urlAboutUs: string;

  address: string;
  localDatabaseUsers: boolean;

  contacts: {
    phone: string;
    email: string;
    address: string;
  };

  adminService: string;
  mainDomain: string;

  tokenBusiness: string;

  meta: {
    mainPage: {
      title: string;
      description: string;
      keywords: string;
      shareImg: string;
      url: string;
    };
  };

  versions: {
    app: string;
    angular?: string;
    material?: string;
    rxjs?: string;
    ngxtranslate?: string;
    angularCli?: string;
    typescript?: string;
    tslint?: string;
  };
}

export type AppName = 'VeoVeo' | 'Umbralf';
