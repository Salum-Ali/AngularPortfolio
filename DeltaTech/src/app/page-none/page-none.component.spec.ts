import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoneComponent } from './page-none.component';

describe('PageNoneComponent', () => {
  let component: PageNoneComponent;
  let fixture: ComponentFixture<PageNoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
