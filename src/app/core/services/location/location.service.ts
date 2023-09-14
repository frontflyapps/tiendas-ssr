import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LOCATION } from '../../classes/storageNames.class';
import { environment } from 'environments/environment';
import { StorageService } from '../storage/storage.service';

export const LOCATION_BASE = {
  municipality: null,
  province: null,
  business: null,
};

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  urlProvince = environment.apiUrl + 'province';
  urlProvinceId = this.urlProvince + '/:id';
  urlMunicipality = environment.apiUrl + 'municipality';
  urlMunicipalityId = this.urlMunicipality + '/:id';

  private location = new BehaviorSubject<any>(LOCATION_BASE);
  location$: Observable<any> = this.location.asObservable();

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService,
  ) {
    this.getLocationOnLocalStorage();
  }

  public updateLocation(location: any) {
    this.location.next(location);
  }

  public getProvince(): Observable<any> {
    return this.httpClient.get(this.urlProvince) as Observable<any>;
  }

  public getProvinceById(id): Observable<any> {
    return this.httpClient.get<any>(this.urlProvinceId.replace(':id', id));
  }

  public getMunicipality(): Observable<any> {
    return this.httpClient.get(this.urlMunicipality) as Observable<any>;
  }

  public getMunicipalityId(id): Observable<any> {
    return this.httpClient.get<any>(this.urlMunicipalityId.replace(':id', id));
  }

  private getLocationOnLocalStorage() {
    let locationOnLocalStorage;
    try {
      locationOnLocalStorage = JSON.parse(this.storageService.getItem(LOCATION));
      if (locationOnLocalStorage) {
        this.updateLocation(locationOnLocalStorage);
      }
    } catch (e) {
      console.warn('-> Error getItem storage', e);
    }
  }
}
