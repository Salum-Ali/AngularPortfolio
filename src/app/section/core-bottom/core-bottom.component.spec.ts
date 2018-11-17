import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreBottomComponent } from './core-bottom.component';

describe('CoreBottomComponent', () => {
  let component: CoreBottomComponent;
  let fixture: ComponentFixture<CoreBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
