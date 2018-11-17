import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreTopComponent } from './core-top.component';

describe('CoreTopComponent', () => {
  let component: CoreTopComponent;
  let fixture: ComponentFixture<CoreTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
