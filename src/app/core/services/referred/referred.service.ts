import { Injectable, Injector } from '@angular/core';
import { RestFullService } from '../rest-full.service';
import { environment } from 'environments/environment';

@Injectable()
export class ReferredService extends RestFullService<any> {
  override url = environment.apiUrl + 'referrer';
  override urlId = environment.apiUrl + 'referrer/:id';

  constructor(injector: Injector) {
    super(injector);
  }
}
