import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HornavComponent } from './hornav.component';

describe('HornavComponent', () => {
  let component: HornavComponent;
  let fixture: ComponentFixture<HornavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HornavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HornavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
