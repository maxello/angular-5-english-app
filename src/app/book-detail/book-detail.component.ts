import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../book';
import { BookService } from '../book.service';
import { PreloaderService } from '../book-header/preloader/preloader.service';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [ './book-detail.component.scss' ]
})
export class BookDetailComponent implements OnInit {
  book: Book;
  lastId: Number;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location,
    private router: Router,
    private preloaderService: PreloaderService,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.getBook();
    if(this.book){
      this.lastId = this.getLastId();
    }
  }

  private getBook(): void {
    let id: number = +this.route.snapshot.paramMap.get('id');

    if(id){
      this.bookService.getBook(id).subscribe(book => {
        this.book = this.utilsService.deepCopy(book);
      });
      if(!this.book){
        this.router.navigate(['/books']);
      }
    } else {
      this.book = {
          id: null,
          comments: '',
          date: null,
          title: 'Book title',
          words: []
        }
      }
    }

    handleTitleUpdated(title): void {
      this.book.title = title;
    }

    handleWordChanged(data): void {
      if(data.flag && data.flag === 'delete'){
        this.book.words = this.book.words.filter((word) => {
          return word.id !== data.id;
        });
      } else if(data.flag && data.flag === 'mark') {
        for(let word of this.book.words){
          if(word.id === data.id){
            word.isMarked = !word.isMarked;
          }
        }
      }
    }

    handleWordsCombinationAdded(value): void {
      this.book.words.push(value);
    }

    goBack(): void {
      this.location.back();
    }

    saveBook(): void {
      this.loading = true;
      this.preloaderService.setPreloaderValue(this.loading);
      this.bookService.setBook(this.book).then((id) => {
        this.loading = false;
        this.preloaderService.setPreloaderValue(this.loading);
      }).catch((error) => {
        console.error(error);
        this.loading = false;
        this.preloaderService.setPreloaderValue(this.loading);
      });
    }

    saveBookAndExit(): void {
      this.loading = true;
      this.preloaderService.setPreloaderValue(this.loading);
      this.bookService.setBook(this.book).then((id) => {
        this.loading = false;
        this.preloaderService.setPreloaderValue(this.loading);
        this.router.navigate(['/books']);
      }).catch((error) => {
        console.error(error);
        this.loading = false;
        this.preloaderService.setPreloaderValue(this.loading);
      });
    }

    private getLastId(): number {
      let id = 1;
      // console.log("this.book", this.book);
      for(let word of this.book.words){
        if(word.id > id){
          id = word.id;
        }
      }
      return id;
    }

    onDeleteBook(){
      let con = confirm("Do you really want to delete the book?");
      if(con){
        this.loading = true;
        this.preloaderService.setPreloaderValue(this.loading);
        this.bookService.deleteBook(this.book.id).then((id) => {
          this.loading = false;
          this.preloaderService.setPreloaderValue(this.loading);
          this.router.navigate(['/books']);
        }).catch((error) => {
          console.error(error);
          this.loading = false;
          this.preloaderService.setPreloaderValue(this.loading);
        });
      }
    }
}
