import { Environment } from './types';
import { environmentFactory, appName } from './utils';

const getOverride = (name: string): Partial<Environment> => {
  // eslint-disable-next-line
  const { environment } = require(`./overrides/${name}/environment.prod`);
  return environment || {};
};

export const environment: Environment = environmentFactory(appName ? getOverride(appName) : {});
