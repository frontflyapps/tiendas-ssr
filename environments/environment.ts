import { AppName, Environment } from './types';
import { appName, environmentFactory } from './utils';
import { devOverrides as devOverridesVeoVeo } from './overrides/VeoVeo';
import { devOverrides as devOverridesUmbralf } from './overrides/Umbralf';

const envRecord: Record<AppName, Partial<Environment>> = {
  VeoVeo: devOverridesVeoVeo,
  Umbralf: devOverridesUmbralf,
};

export const environment: Environment = environmentFactory(appName ? envRecord[appName] : {});
