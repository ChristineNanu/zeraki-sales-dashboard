import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopMetricsComponent } from './dashboard-top-metrics.component';

describe('DashboardTopMetricsComponent', () => {
  let component: DashboardTopMetricsComponent;
  let fixture: ComponentFixture<DashboardTopMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTopMetricsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardTopMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
