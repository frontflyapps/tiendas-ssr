import { ApiOptions, ApiResponse } from '../classes/api.class';
import { Observable, lastValueFrom } from 'rxjs';
import { AnyRecord } from '../classes/general.class';

export const handleObservable = <T extends any = any>(
  obs: Observable<ApiResponse<T>>,
  options?: ApiOptions<T>,
): void => {
  const { onAfterFailed, onAfterSuccess, onBusy } = options || {};

  onBusy?.(true);
  lastValueFrom<ApiResponse<T>>(obs)
    .then((data) => {
      onBusy?.(false);
      onAfterSuccess?.(data.data);
    })
    .catch((e) => {
      onBusy?.(false);
      onAfterFailed?.(e);
    });
};
