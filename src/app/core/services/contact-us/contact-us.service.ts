import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  url = environment.apiUrl + 'contact-us';
  urlId = environment.apiUrl + 'contact-us/:id';
  httpOptions = {};

  constructor(private httpClient: HttpClient) {}

  createContactUs(body: any): Observable<any> {
    return this.httpClient.post<any>(this.url, body);
  }

  getAboutUs(): Observable<any> {
    return this.httpClient.get<any>(environment.apiUrl + 'about-us').pipe(
      map((data) => {
        return data?.data[0];
      })
    );
  }
}
