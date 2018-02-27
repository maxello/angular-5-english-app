import { Injectable } from '@angular/core';

@Injectable()
export class PreloaderService {
  preloader: boolean = true;

  setPreloaderValue(flag){
    this.preloader = flag;
  }

  getPreloaderValue(){
    return this.preloader;
  }
}
