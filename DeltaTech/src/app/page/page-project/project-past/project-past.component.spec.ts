import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPastComponent } from './project-past.component';

describe('ProjectPastComponent', () => {
  let component: ProjectPastComponent;
  let fixture: ComponentFixture<ProjectPastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
