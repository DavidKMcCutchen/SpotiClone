import {
  HttpBackend,
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  // private customHttp: HttpClient

  constructor(
    public authService: AuthService,
    // private backend: HttpBackend
    ) {
      // this.customHttp = new HttpClient(backend)
    }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getToken();

    if (accessToken) {
    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${accessToken}`,
      },
    })};

    return next.handle(request);
  }
}
