import { Environment } from './types';
import { appName, environmentFactory } from './utils';

const getOverride = (name: string): Partial<Environment> => {
  // eslint-disable-next-line
  const { environment } = require(`../src/${name}/environments/environment`);
  return environment || {};
};

export const environment: Environment = environmentFactory(appName ? getOverride(appName) : {});
