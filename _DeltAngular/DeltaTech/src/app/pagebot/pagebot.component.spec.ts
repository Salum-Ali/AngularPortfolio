import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagebotComponent } from './pagebot.component';

describe('PagebotComponent', () => {
  let component: PagebotComponent;
  let fixture: ComponentFixture<PagebotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagebotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagebotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
