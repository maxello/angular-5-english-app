import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  queryString: boolean;

  setSearchValue(value){
    this.queryString = value;
  }

  getSearchValue(){
    return this.queryString;
  }
}
