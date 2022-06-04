import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRESWORDS } from './mock-pres-words';
import { PresWord } from './pres-word';

@Injectable({
  providedIn: 'root',
})
export class PresWordsService {
  constructor() {}

  getPresWords(): Observable<PresWord[]> {
    const presWords = of(PRESWORDS);
    return presWords;
  }
}
