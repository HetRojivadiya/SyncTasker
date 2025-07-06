import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SpinnerService } from '../services/spinner';
import { DISABLE_SPINNER } from './spinner-interceptor';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private spinner: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const disableSpinner = req.context.get(DISABLE_SPINNER);

    if (!disableSpinner) {
      this.spinner.show();
    }

    return next.handle(req).pipe(
      finalize(() => {
        if (!disableSpinner) {
          this.spinner.hide();
        }
      })
    );
  }
}
