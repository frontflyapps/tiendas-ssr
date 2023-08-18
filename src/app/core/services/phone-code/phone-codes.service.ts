import { Injectable, Injector } from '@angular/core';
import { RestFullService } from '../rest-full.service';
import { environment } from 'environments/environment';

@Injectable()
export class PhoneCodeService extends RestFullService<any> {
  override url = environment.apiUrl + 'calling-code';
  override urlId = environment.apiUrl + 'calling-code/:id';

  constructor(injector: Injector) {
    super(injector);
  }
}
