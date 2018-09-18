import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeGamedevComponent } from './resume-gamedev.component';

describe('ResumeGamedevComponent', () => {
  let component: ResumeGamedevComponent;
  let fixture: ComponentFixture<ResumeGamedevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeGamedevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeGamedevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
