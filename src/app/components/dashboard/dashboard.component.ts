import { Component } from '@angular/core';
import { DashboardTopMetricsComponent } from '../dashboard-top-metrics/dashboard-top-metrics.component';
import { SignupProgressComponent } from '../signup-progress/signup-progress.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardTopMetricsComponent, SignupProgressComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
