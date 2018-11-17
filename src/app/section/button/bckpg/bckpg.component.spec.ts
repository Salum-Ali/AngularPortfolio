import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BckpgComponent } from './bckpg.component';

describe('BckpgComponent', () => {
  let component: BckpgComponent;
  let fixture: ComponentFixture<BckpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BckpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BckpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
