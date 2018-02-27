import { Injectable } from '@angular/core';
import { Book } from './book';
import { AngularFirestore } from 'angularfire2/firestore';
// import { BOOKS } from './mock-books';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BookService {
  private BOOKS: Book[] = [];

  constructor(){ }

  public getBooks(): Observable<Book[]> {
    if(localStorage.getItem('books')){
      let books = JSON.parse(localStorage.getItem('books'));
      this.BOOKS = books;
    }
    return of(this.BOOKS);
  }

  public getBook(id: number): Observable<Book> {
    return of(this.BOOKS.find(book => book.id === id));
  }

  private getBookId(): number {
    let id = 0;
    for(let book of this.BOOKS){
      if(book.id > id){
        id = book.id;
      }
    }
    return ++id;
  }

  public setBook(data: Book): Promise<object> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(data.id){
            this.BOOKS.map((book, ind)=>{
              if(book.id === data.id){
                this.BOOKS[ind] = data;
                localStorage.setItem('books', JSON.stringify(this.BOOKS));
                resolve({'settedId': data.id});
                return false;
              }
            });
          } else {
            data.id = this.getBookId();
            data.date = new Date().getTime();
            this.BOOKS.push(data);
            localStorage.setItem('books', JSON.stringify(this.BOOKS));
            resolve({'settedId': data.id});
          }
          reject({'error': 'Product with such ID was not added'});
        }, 1000);
    });
  }

  public deleteBook(id: number): Promise<object> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.BOOKS.map((book, ind) => {
            if(book.id === id){
              this.BOOKS.splice(ind, 1);
              localStorage.setItem('books', JSON.stringify(this.BOOKS));
              resolve({'deletedId': id});
              return false;
            }
          });
          reject({'error': 'Product with such ID was not deleted'});
        }, 1000);
    });
  }
}
