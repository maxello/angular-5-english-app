import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHeadingComponent } from './book-heading.component';

describe('BookHeadingComponent', () => {
  let component: BookHeadingComponent;
  let fixture: ComponentFixture<BookHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
