import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DISABLE_SPINNER } from '../interceptors/spinner-interceptor';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  constructor(private http: HttpClient) { }

  get<T>(endpoint: string, params?: any, disableSpinner = false): Observable<T> {
    return this.http.get<T>(endpoint, {
      params: this.convertToParams(params),
      context: new HttpContext().set(DISABLE_SPINNER, disableSpinner)
    });
  }

  post<T>(endpoint: string, body?: any, params?: any, disableSpinner = false): Observable<T> {
    return this.http.post<T>(endpoint, body, {
      params: this.convertToParams(params),
      context: new HttpContext().set(DISABLE_SPINNER, disableSpinner)
    });
  }

  put<T>(endpoint: string, body?: any, params?: any, disableSpinner = false): Observable<T> {
    return this.http.put<T>(endpoint, body, {
      params: this.convertToParams(params),
      context: new HttpContext().set(DISABLE_SPINNER, disableSpinner)
    });
  }

  delete<T>(endpoint: string, params?: any, disableSpinner = false): Observable<T> {
    return this.http.delete<T>(endpoint, {
      params: this.convertToParams(params),
      context: new HttpContext().set(DISABLE_SPINNER, disableSpinner)
    });
  }

  private convertToParams(paramsObj?: any): HttpParams {
    let params = new HttpParams();
    if (paramsObj) {
      Object.keys(paramsObj).forEach(key => {
        const value = paramsObj[key];
        if (value !== undefined) {
          params = params.set(key, value != null ? value.toString() : 'null');
        }
      });
    }
    return params;
  }
}
