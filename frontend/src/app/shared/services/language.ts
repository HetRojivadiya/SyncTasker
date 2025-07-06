import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private readonly translate: TranslateService) {}

  setLanguage(lang: string) {
    this.translate.use(lang);
  }
}
