import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusinessConfigService {
  urlCookie = environment.apiUrl + 'auth/cookies';
  urlBusinessConfig = environment.apiUrl + 'business-config';
  urlBusinessConfigId = environment.apiUrl + 'business-config/:id';
  httpOptions = {};

  $businessConfig = new Subject<any>();

  constructor(private httpClient: HttpClient) {}

  requestCookie(): Observable<any> {
    return this.httpClient.get<any>(this.urlCookie);
  }

  getBusinessConfig(): Observable<any> {
    return this.httpClient.get<any>(this.urlBusinessConfig);
  }
  getBusinessConfigId(data: any): Observable<any> {
    return this.httpClient.get<any>(
      this.urlBusinessConfigId.replace(':id', data),
      this.httpOptions,
    );
  }
}
