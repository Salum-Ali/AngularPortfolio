import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwdpgComponent } from './fwdpg.component';

describe('FwdpgComponent', () => {
  let component: FwdpgComponent;
  let fixture: ComponentFixture<FwdpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwdpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwdpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
