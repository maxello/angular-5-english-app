import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { PreloaderService } from '../book-header/preloader/preloader.service';
import { SearchService } from '../book-header/search.service';
import { BooksFilterPipe } from '../pipes/books-filter.pipe';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService, private preloaderService: PreloaderService, private searchService: SearchService) { }

  books: Book[];

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      this.preloaderService.setPreloaderValue(false);
    });
  }
}
