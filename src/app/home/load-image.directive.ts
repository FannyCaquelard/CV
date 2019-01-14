import { Directive, Renderer2, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { first } from 'rxjs/operators';
import { LanguageService } from '@app/core/language.service';

@Directive({
  selector: '[appLoadImage]'
})
export class LoadImageDirective {
  constructor(private renderer: Renderer2, private el: ElementRef, private languageService: LanguageService) {}

  ngOnInit() {
    this.subscribeChange();
  }

  private setPlaceholder() {
    this.renderer.setAttribute(this.el.nativeElement, 'src', `assets/img/fox_spinner.svg`);
    this.renderer.setAttribute(this.el.nativeElement, 'class', 'w-25 center');
  }

  private setImage = () => {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'src',
      `assets/img/background_${this.languageService.subjectLang.getValue()}.svg`
    );
    this.renderer.setAttribute(this.el.nativeElement, 'class', 'w-100 img-fluid mt-2 rounded');
  };

  subscribeChange() {
    this.languageService.subjectLang.subscribe(() => {
      fromEvent(this.el.nativeElement, 'load')
        .pipe(first())
        .subscribe(() => this.setImage());

      this.setPlaceholder();
    });
  }
}
