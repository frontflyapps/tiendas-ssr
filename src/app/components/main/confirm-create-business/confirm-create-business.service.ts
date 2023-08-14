import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class ConfirmCreateBusinessService {
  public url = environment.apiUrl + 'etecsa-sign-up';

  constructor(private httpClient: HttpClient) {}

  etecsaSignUp(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }
}
