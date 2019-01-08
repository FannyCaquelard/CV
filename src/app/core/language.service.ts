import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  subjectLang: BehaviorSubject<string> = new BehaviorSubject<string>('fr');

  constructor() {}
}
