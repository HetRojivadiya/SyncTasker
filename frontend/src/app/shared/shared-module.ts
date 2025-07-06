import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Spinner } from './components/spinner/spinner';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    Spinner
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],  
  exports: [TranslateModule,Spinner]
})
export class SharedModule { }
