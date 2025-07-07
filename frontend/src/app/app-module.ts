import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory, SharedModule } from './shared/shared-module';
import { CoreModule } from './core/core-module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ApiBaseInterceptor } from './core/interceptors/api-base-interceptor';
import { LoadingInterceptor } from './core/interceptors/loading-interceptor';
import { ErrorInterceptor } from './core/interceptors/error-interceptor';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ToastrModule.forRoot()
  ],
 providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiBaseInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    provideAnimations(),
  ],
  bootstrap: [App]
})
export class AppModule { }

