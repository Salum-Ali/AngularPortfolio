import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VernavComponent } from './vernav.component';

describe('VernavComponent', () => {
  let component: VernavComponent;
  let fixture: ComponentFixture<VernavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VernavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
