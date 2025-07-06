import { Component } from '@angular/core';
import { LanguageService } from './shared/services/language';
import { HttpBaseService } from './core/services/http-base';
import { take } from 'rxjs';

const DEFAULT_LANGUAGE: string = 'en';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {

  constructor(
    public languageService: LanguageService,
    private readonly httpBaseService: HttpBaseService
  ) {
    this.languageService.setLanguage(DEFAULT_LANGUAGE);
    this.getData();
  }

  changeLanguage(lang: string) {
    this.languageService.setLanguage(lang);
  }

  getData() {
    this.httpBaseService.get('api/dhfghjgdfs').pipe(take(1)).subscribe(data => {
      console.log(data);
    }, error => {
      console.error('Error fetching data:', error);
    });
  }

}
