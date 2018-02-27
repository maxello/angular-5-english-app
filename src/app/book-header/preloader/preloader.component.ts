import { Component, OnInit } from '@angular/core';
import { PreloaderService } from './preloader.service';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {
  preloader: boolean;
  constructor(private preloaderService: PreloaderService) { }

  ngOnInit() {}

  ngDoCheck(){
    this.preloader = this.preloaderService.getPreloaderValue();
  }
}
