import { Component, OnInit } from '@angular/core';
import { NgxChartsModule, PieChartModule } from '@swimlane/ngx-charts';
import { ApiService } from '../../services/api.service';

interface TargetCounts {
  [key: string]: number;
}

const targetCounts: TargetCounts = {
  'Analytics': 100,
  'Finance': 150,
  'Timetable': 200
};

@Component({
  selector: 'app-signup-progress',
  templateUrl: './signup-progress.component.html',
  styleUrls: ['./signup-progress.component.css'],
  standalone: true // Indicates that this component can be used as a standalone component
})
export class SignupProgressComponent implements OnInit {
  chartData: { name: string, value: number }[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSchools().subscribe(schools => {
      const schoolsGroupedByProduct = schools.reduce((acc, school) => {
        acc[school.product] = (acc[school.product] || 0) + 1;
        return acc;
      }, {});

      this.chartData = Object.keys(schoolsGroupedByProduct).map(product => ({
        name: `${product} (Target: ${targetCounts[product]})`,
        value: schoolsGroupedByProduct[product]
      }));
    });
  }
}
