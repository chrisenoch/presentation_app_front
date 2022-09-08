import { Component, OnInit } from '@angular/core';
import { PresWordsService } from 'src/app/services/pres-words.service';
import { PresWord } from 'src/app/entities/presWord';

@Component({
  selector: 'app-pres',
  templateUrl: './pres.component.html',
  styleUrls: ['./pres.component.css'],
})
export class PresComponent implements OnInit {
  //forward, back, start, end,toggle,
  constructor(private presWordsService: PresWordsService) { }

  ngOnInit(): void {
    this.fetchPresWords();
  }

  presWords: PresWord[] = [];
  presWordNo: number = 0; //controls which word will be extracted from presWords array
  isTranslationPresWord = false;

  //for toggle functionality
  presWord: string = '';
  presWordSecondary: string = '';

  //example
  selectedPresWord?: PresWord;

  fetchPresWords(): void {
    console.log('fetchPresWords entered');
    this.presWordsService
      .fetchPresWords()
      // .subscribe(presWords => this.presWords = presWords);
      .subscribe((presWords) => {
        console.dir('in fetchWords subscribe, print presWords'); // console.log(presWords);
        this.presWords = presWords;
        console.dir("Value of presWords: " + this.presWords);
        //this.updateWords(); //only call updateWords when words have arrived
      });
  }

  // updateWords(): void {
  //   console.log("in updateWords print translation");
  //   console.log(this.presWords[this.presWordNo].translation);


  //   this.presWord = this.isTranslationPresWord
  //     ? this.presWords[this.presWordNo].translation
  //     : this.presWords[this.presWordNo].english;
  //   this.presWordSecondary = this.isTranslationPresWord
  //     ? this.presWords[this.presWordNo].english
  //     : this.presWords[this.presWordNo].translation;
  // }

  onStart(event?: MouseEvent) {
    console.log('onStart called');
    this.presWordNo = 0;
    //this.updateWords();
  }

  onBack(event?: MouseEvent) {
    console.log('onBack called');
    if (this.presWordNo > 0) {
      --this.presWordNo;
      //this.updateWords();
    } //dont go back further than zero.
  }

  onToggle(event?: MouseEvent) {
    console.log('onToggle called');
    this.isTranslationPresWord = !this.isTranslationPresWord;
    //this.updateWords();
  }

  onExamples(event?: MouseEvent) {
    console.log('onExamples called');

    //add logic here
    //this.updateWords();
  }

  onSeen(event?: MouseEvent) {
    console.log('onSeen called');
    //add logic to add to words to review array
    if (this.presWordNo < this.presWords.length - 1) {
      ++this.presWordNo;
      //this.updateWords();
    }
  }

  onSkip(event?: MouseEvent) {
    console.log('onSkip called');
    if (this.presWordNo < this.presWords.length - 1) {
      ++this.presWordNo;
      //this.updateWords();
    }
  }

  onEnd(event?: MouseEvent) {
    console.log('onEnd called');
    this.presWordNo = this.presWords.length - 1;
    //this.updateWords();
  }
}
