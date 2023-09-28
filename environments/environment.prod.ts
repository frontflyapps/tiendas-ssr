import { Environment } from './types';
import { environmentFactory, appName } from './utils';

const getOverride = (name: string): Partial<Environment> => {
  // eslint-disable-next-line
  const { environment } = require(`../src/${name}/environments/environment.prod`);
  return environment || {};
};

export const environment: Environment = environmentFactory(appName ? getOverride(appName) : {});
