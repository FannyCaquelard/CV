import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { QuoteService } from './quote.service';
import { I18nService } from '@app/core';
import { LanguageService } from '@app/core/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string;
  isLoading: boolean;
  radioChecked: boolean = true;

  constructor(
    private quoteService: QuoteService,
    private i18nService: I18nService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.i18nService.language = 'fr';
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }

  updateLanguage(target: any) {
    this.languageService.subjectLang.next(target);
    this.radioChecked = !this.radioChecked;
    this.i18nService.language = target;
  }

  scroll(target: any) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
