import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subject} from 'rxjs';
import { PRESWORDS } from './mock-pres-words';
import { PresWord } from './pres-word';
import { HttpClient } from '@angular/common/http';
import { map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PresWordsService {
  constructor(private http: HttpClient) {}

  private presWords: PresWord[];

  getPresWords(): Observable<PresWord[]> {
    const presWords = of(PRESWORDS);
    return presWords;
  }

  fetchPresWords(){

    return this.http.get<{ [key: string]: PresWord}>("https://flashcard-app-2022-default-rtdb.firebaseio.com/posts.json")
    .pipe(
      map( responseData =>
        {
          let wordsFetched:PresWord[] = [];
          for (const key in responseData){
            if (responseData.hasOwnProperty(key)){
              console.log(" responseData[key] " + responseData[key]);
              wordsFetched.push({...responseData[key]});
            }
          }
          return wordsFetched;
        })
        , tap(
          words => {
            // console.log("Words from database " + JSON.stringify(words));
            // console.log("Words from database " + JSON.stringify(Object.values(words)));
            // console.log("Words from database " + JSON.stringify(Object.values(words[0])));
            // console.log("Words from database " + JSON.stringify(words[0]));
            this.presWords = Object.values(words[0]);
            //console.log("Words 2" + this.words2);
          })
    )}












}
