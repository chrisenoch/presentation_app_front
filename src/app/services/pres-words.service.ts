import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PresWord } from '../entities/presWord';

@Injectable({
  providedIn: 'root',
})
export class PresWordsService {
  constructor(private httpClient: HttpClient) {}

  private presWords: PresWord[] = [];

  fetchPresWords(): Observable<PresWord[]> {

    return this.httpClient.get<GetResponseWords>(environment.springApiUrl + 'words/').pipe(
      map(response => response._embedded.words)
    );
  }
}

interface GetResponseWords {
  _embedded: {
    words: PresWord[];
  }
}
