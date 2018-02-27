import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  constructor() { }

  @Input() book: Book;

  ngOnInit() {
  }

  getMarked(arr): number {
    let result = 0;
    for(let item of arr){
      if(item.isMarked){
        result += 1;
      }
    }
    return result;
  }
}
