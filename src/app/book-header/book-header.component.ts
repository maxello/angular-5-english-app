import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-header',
  templateUrl: './book-header.component.html',
  styleUrls: ['./book-header.component.scss']
})

export class BookHeaderComponent implements OnInit {
  queryString: string;

  constructor(private searchService: SearchService, public router: Router) {
    router.events.subscribe((val) => {
      this.queryString = '';
      this.searchService.setSearchValue(this.queryString);
    })
  }

  ngOnInit() {}

  onChangeSearchField(event){
    this.searchService.setSearchValue(this.queryString);
  }
}
