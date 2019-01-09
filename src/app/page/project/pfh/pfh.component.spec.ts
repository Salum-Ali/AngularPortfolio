import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfhComponent } from './pfh.component';

describe('PfhComponent', () => {
  let component: PfhComponent;
  let fixture: ComponentFixture<PfhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
