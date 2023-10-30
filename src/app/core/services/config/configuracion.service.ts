import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracionService {
  url = environment.apiUrl + 'config';

  constructor(private httpClient: HttpClient) {}

  public async getValue(key: string): Promise<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('filter[$and][llave]', key);
    return new Promise((resolve, reject) => {
      lastValueFrom(this.httpClient.get<any>(this.url, { params: httpParams }))
        .then((response) => {
          const data =
            response && response.data.length && response.data[0].valor
              ? response.data[0].valor
              : null;
          if (data) {
            resolve(data);
          } else {
            resolve(data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public async setValue(key, value): Promise<any> {
    return new Promise((resolve, reject) => {
      lastValueFrom(this.httpClient.post<any>(this.url, { llave: key, valor: value }))
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public async deleteValue(key: string): Promise<void> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('filter[$and][llave]', key);
    return new Promise((resolve, reject) => {
      lastValueFrom(this.httpClient.delete<any>(this.url, { params: httpParams }))
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
