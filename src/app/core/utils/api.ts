import { ApiOptions, ApiResponse } from '../classes/api.class';
import { Observable, lastValueFrom } from 'rxjs';
import { AnyRecord } from '../classes/general.class';

export const handleObservable = <T extends AnyRecord>(
  obs: Observable<ApiResponse<T>>,
  options?: ApiOptions<T>
): void => {
  const { onAfterFailed, onAfterSuccess, onBusy } = options || {};

  onBusy?.(true);
  lastValueFrom<ApiResponse<T>>(obs)
    .then((data) => {
      onBusy?.(false);
      onAfterSuccess?.(data.data);
    })
    .catch((e) => {
      onAfterFailed?.(e);
    });
};
