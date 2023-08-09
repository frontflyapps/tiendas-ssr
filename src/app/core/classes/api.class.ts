import { UnknownRecord } from './general.class';

export interface ApiResponse<Data = any> {
  data: Data;
  meta: UnknownRecord;
}

export interface ApiOptions<R = any> {
  onAfterSuccess?: (response: R) => void;
  onAfterFailed?: (error: any) => void;
  onBusy?: (status: boolean) => void;
}
