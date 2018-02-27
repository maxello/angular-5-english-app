import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { BookTranslatorService } from './book-translator.service';
import { PreloaderService } from '../../book-header/preloader/preloader.service';

@Component({
  selector: 'app-book-translator',
  templateUrl: './book-translator.component.html',
  styleUrls: ['./book-translator.component.scss']
})

export class BookTranslatorComponent implements OnInit {
  @Input() lastId: number;
  currentId: Number;
  word: string;
  translation: string;
  loading: boolean;
  @Output() addWordsCombination = new EventEmitter();

  constructor(private bookTranslatorService: BookTranslatorService, private preloaderService: PreloaderService) { }

  ngOnInit() { }

  prepareWordsCombination(){
    if(this.word && this.translation){
      this.lastId = this.lastId + 1;
      this.addWordsCombination.emit({
        id: this.lastId,
        date: new Date().getTime(),
        translation: this.translation,
        word: this.word,
        isMarked: false
      });
      this.word = this.translation = '';
    }
  }

  checkWordsCombination(): boolean {
    return !(this.word && this.translation);
  }

  getTranslation(word){
    this.loading = true;
    this.preloaderService.setPreloaderValue(this.loading);
    this.bookTranslatorService.getTranslate(word).subscribe(data => {
      this.translation = data.text.join(', ');
      this.loading = false;
      this.preloaderService.setPreloaderValue(this.loading);
    }, error => {
      this.loading = false;
      this.preloaderService.setPreloaderValue(this.loading);
    });
  }
}
