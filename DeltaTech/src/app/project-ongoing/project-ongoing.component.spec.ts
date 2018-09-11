import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOngoingComponent } from './project-ongoing.component';

describe('ProjectOngoingComponent', () => {
  let component: ProjectOngoingComponent;
  let fixture: ComponentFixture<ProjectOngoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectOngoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOngoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
