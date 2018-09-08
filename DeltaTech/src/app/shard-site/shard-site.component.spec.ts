import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShardSiteComponent } from './shard-site.component';

describe('ShardSiteComponent', () => {
  let component: ShardSiteComponent;
  let fixture: ComponentFixture<ShardSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShardSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShardSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
