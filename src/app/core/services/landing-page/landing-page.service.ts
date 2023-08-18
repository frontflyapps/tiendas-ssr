import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ApiOptions, ApiResponse } from '../../classes/api.class';
import { LandignPageData } from '../../classes/landing-page.class';
import { handleObservable } from '../../utils/api';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  imageUrl = environment.imageUrl;
  url = environment.apiUrl + 'landing-page';

  constructor(private httpClient: HttpClient) {}

  getFrontData(options?: ApiOptions<LandignPageData>): void {
    handleObservable<LandignPageData>(
      this.httpClient.get<ApiResponse<LandignPageData>>(this.url),
      options,
    );
  }
}
