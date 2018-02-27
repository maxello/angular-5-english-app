import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

import { BookService } from './book.service';
import { BookTranslatorService } from './book-detail/book-translator/book-translator.service';
import { AppRoutingModule } from './/app-routing.module';
import { BookItemComponent } from './books/book-item/book-item.component';
import { BookHeadingComponent } from './book-detail/book-heading/book-heading.component';
import { BookTranslatorComponent } from './book-detail/book-translator/book-translator.component';
import { BookTranslationsListComponent } from './book-detail/book-translations-list/book-translations-list.component';

import { HttpClientModule } from '@angular/common/http';
import { BookHeaderComponent } from './book-header/book-header.component';
import { PreloaderComponent } from './book-header/preloader/preloader.component';
import { PreloaderService } from './book-header/preloader/preloader.service';
import { SearchService } from './book-header/search.service';
import { BooksFilterPipe } from './pipes/books-filter.pipe';

import { UtilsService } from './utils.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    BookItemComponent,
    BookHeadingComponent,
    BookTranslatorComponent,
    BookTranslationsListComponent,
    BookHeaderComponent,
    PreloaderComponent,
    BooksFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookService, BookTranslatorService, PreloaderService, SearchService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
