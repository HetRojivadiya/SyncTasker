import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiBaseInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.startsWith('api/')) {
      req = req.clone({ url: `${environment.apiUrl}/${req.url}` });
    }
    return next.handle(req);
  }
}
