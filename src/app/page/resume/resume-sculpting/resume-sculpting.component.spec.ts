import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSculptingComponent } from './resume-sculpting.component';

describe('ResumeSculptingComponent', () => {
  let component: ResumeSculptingComponent;
  let fixture: ComponentFixture<ResumeSculptingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeSculptingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSculptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
