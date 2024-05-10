import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryAnalyticsComponent } from './query-analytics.component';

describe('QueryAnalyticsComponent', () => {
  let component: QueryAnalyticsComponent;
  let fixture: ComponentFixture<QueryAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
