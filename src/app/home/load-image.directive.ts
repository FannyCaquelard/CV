import { Directive, Renderer2, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { first } from 'rxjs/operators';
import { LanguageService } from '@app/core/language.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Directive({
  selector: '[appLoadImage]'
})
export class LoadImageDirective {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private languageService: LanguageService,
    private deviceService: DeviceDetectorService
  ) {}

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
      `assets/img/background_${this.languageService.subjectLang.getValue()}_is_mobile_${this.deviceService.isMobile()}.svg`
    );
    this.renderer.setAttribute(this.el.nativeElement, 'class', 'w-100 mt-2');
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
