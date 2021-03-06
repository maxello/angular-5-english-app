import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent }   from './dashboard/dashboard.component';
import { BooksComponent }      from './books/books.component';
import { BookDetailComponent }  from './book-detail/book-detail.component';

const routes: Routes = [
  { path: 'angular-5-english-app', redirectTo: '/books', pathMatch: 'full' },
  { path: 'detail/:id', component: BookDetailComponent },
  { path: 'books', component: BooksComponent },
  { path: 'add', component: BookDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
