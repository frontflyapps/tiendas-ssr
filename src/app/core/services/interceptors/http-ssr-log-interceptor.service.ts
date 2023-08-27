import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'environments/environment';
import { inspect } from 'util';

@Injectable()
export class HttpSSRLogInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!environment.production) {
      return next.handle(request).pipe(
        map((response: any) => {
          console.warn(
            `${request.method} ----------- ${request.url}---------------------------------------`,
          );

          console.log(
            inspect(
              {
                headers: request.headers,
                body: request.body,
                params: request.params,
                urlWithParams: request.urlWithParams,
              },
              { depth: null },
            ),
          );
          console.log('--------------------------------------------');

          console.log(
            inspect(
              {
                body: response.body,
                status: response.status,
              },
              { depth: null },
            ),
          );

          return response;
        }),
      );
    }

    return next.handle(request);
  }
}
