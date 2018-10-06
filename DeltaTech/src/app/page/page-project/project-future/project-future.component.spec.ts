import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFutureComponent } from './project-future.component';

describe('ProjectFutureComponent', () => {
  let component: ProjectFutureComponent;
  let fixture: ComponentFixture<ProjectFutureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFutureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
