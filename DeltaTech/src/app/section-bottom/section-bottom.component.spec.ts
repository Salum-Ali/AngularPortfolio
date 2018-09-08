import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBottomComponent } from './section-bottom.component';

describe('SectionBottomComponent', () => {
  let component: SectionBottomComponent;
  let fixture: ComponentFixture<SectionBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
