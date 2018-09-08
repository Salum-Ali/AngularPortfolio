import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShardMeComponent } from './shard-me.component';

describe('ShardMeComponent', () => {
  let component: ShardMeComponent;
  let fixture: ComponentFixture<ShardMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShardMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShardMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
