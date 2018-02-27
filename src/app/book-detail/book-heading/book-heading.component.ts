import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-heading',
  templateUrl: './book-heading.component.html',
  styleUrls: ['./book-heading.component.scss']
})
export class BookHeadingComponent implements OnInit {
  @Input() title: string;
  @ViewChild('title') vc: ElementRef;
  @Output() titleUpdated = new EventEmitter();

  headingState: boolean = false;
  headingTemp: string;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.headingTemp = this.title;
  }

  changeHeadingView(flag){
    if(this.headingState){
      this.headingTemp = this.title;
    }
    this.headingState = flag;
  }

  onBlurMethod(){
    if(this.headingTemp.length){
      this.title = this.headingTemp;
    }
    this.changeHeadingView(false);
    this.titleUpdated.emit(this.title);
  }

  onKey(event: any){
    if(event.code === 'Escape'){
      this.changeHeadingView(false);
    } else if(event.code === 'Enter') {
      this.onBlurMethod();
    }
  }

  ngDoCheck(){
    if(this.vc){
      this.vc.nativeElement.focus();
    }
  }

  selectAllContent($event: any) {
    $event.target.select();
  }
}
