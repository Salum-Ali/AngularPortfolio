import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPresentComponent } from './project-present.component';

describe('ProjectPresentComponent', () => {
  let component: ProjectPresentComponent;
  let fixture: ComponentFixture<ProjectPresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
