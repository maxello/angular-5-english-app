import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTranslatorComponent } from './book-translator.component';

describe('BookTranslatorComponent', () => {
  let component: BookTranslatorComponent;
  let fixture: ComponentFixture<BookTranslatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTranslatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
