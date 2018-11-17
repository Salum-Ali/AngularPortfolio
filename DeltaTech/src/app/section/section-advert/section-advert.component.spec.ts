import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAdvertComponent } from './section-advert.component';

describe('SectionAdvertComponent', () => {
  let component: SectionAdvertComponent;
  let fixture: ComponentFixture<SectionAdvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAdvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
