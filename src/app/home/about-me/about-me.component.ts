import { Component, OnInit } from '@angular/core';
import { LanguageService } from '@app/core/language.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  modalPicture: string = 'sport';

  modalCard: string = 'development';

  constructor(public languageService: LanguageService) {}

  ngOnInit() {}

  setModalCardText(cardText: string) {
    this.modalCard = cardText;
  }

  setModalText(leisureTitle: string) {
    this.modalPicture = leisureTitle;
  }
}
