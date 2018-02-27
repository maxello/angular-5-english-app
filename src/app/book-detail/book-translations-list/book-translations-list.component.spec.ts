import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTranslationsListComponent } from './book-translations-list.component';

describe('BookTranslationsListComponent', () => {
  let component: BookTranslationsListComponent;
  let fixture: ComponentFixture<BookTranslationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTranslationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTranslationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
