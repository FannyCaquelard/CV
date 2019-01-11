import { Component, OnInit } from '@angular/core';
import { LanguageService } from '@app/core/language.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  constructor(public languageService: LanguageService) {}

  ngOnInit() {}
}
