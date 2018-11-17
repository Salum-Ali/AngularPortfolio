import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCodeComponent } from './resume-code.component';

describe('ResumeCodeComponent', () => {
  let component: ResumeCodeComponent;
  let fixture: ComponentFixture<ResumeCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
