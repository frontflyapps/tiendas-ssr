import { AppName, Environment } from './types';
import { environmentFactory } from './utils';
import { prodOverrides as devOverridesVeoVeo } from './overrides/VeoVeo';
import { prodOverrides as devOverridesUmbralf } from './overrides/Umbralf';

const appName = process.env['NG_APP_NAME'] as AppName | undefined;

const envRecord: Record<AppName, Partial<Environment>> = {
  VeoVeo: devOverridesVeoVeo,
  Umbralf: devOverridesUmbralf,
};

export const environment: Environment = environmentFactory(appName ? envRecord[appName] : {});
