import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FahwComponent } from './fahw.component';

describe('FahwComponent', () => {
  let component: FahwComponent;
  let fixture: ComponentFixture<FahwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FahwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FahwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
