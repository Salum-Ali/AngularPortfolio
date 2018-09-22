import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeArtComponent } from './resume-art.component';

describe('ResumeArtComponent', () => {
  let component: ResumeArtComponent;
  let fixture: ComponentFixture<ResumeArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
