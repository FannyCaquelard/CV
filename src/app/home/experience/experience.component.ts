import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  modalPicture: string = '';

  constructor() {}

  ngOnInit() {}

  test(leisureTitle: string) {
    this.modalPicture = leisureTitle;
  }
}
