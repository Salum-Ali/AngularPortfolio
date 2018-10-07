import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptitleComponent } from './apptitle.component';

describe('ApptitleComponent', () => {
  let component: ApptitleComponent;
  let fixture: ComponentFixture<ApptitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
