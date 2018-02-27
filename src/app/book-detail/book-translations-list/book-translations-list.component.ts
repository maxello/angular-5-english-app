import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface IWord {
    id: number;
    date: number;
    translation: string;
    word: string;
    isMarked: boolean;
}

@Component({
  selector: 'app-book-translations-list',
  templateUrl: './book-translations-list.component.html',
  styleUrls: ['./book-translations-list.component.scss']
})

export class BookTranslationsListComponent implements OnInit {
  @Input() list: IWord[];
  @Output() wordChange = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onMarkItem(item){
    this.wordChange.emit({
      flag: 'mark',
      id: item.id
    });
  }

  onDeleteItem(item){
    let con = confirm("Do you really want to delete the row?");
    if(con){
      this.wordChange.emit({
        flag: 'delete',
        id: item.id
      });
    }
  }
}
