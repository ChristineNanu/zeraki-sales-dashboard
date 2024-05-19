import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-dashboard-top-metrics',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatListModule],
  templateUrl: './dashboard-top-metrics.component.html',
  styleUrl: './dashboard-top-metrics.component.css'
})
export class DashboardTopMetricsComponent implements OnInit {
  collectionsCount: number = 0;
  schoolsCount: number = 0;
  schoolsCountByProduct: any[] = [];
  totalRevenue: number = 0;
  totalRevenueByProduct: any[] = [];
  bouncedChequesCount: number = 0;
  expandSchoolsCount: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadMetrics();
  }

  loadMetrics() {
    this.apiService.getCollectionsCount().subscribe(collectionsCount => this.collectionsCount = collectionsCount);
    this.apiService.getSchools().subscribe(schools => {
      this.schoolsCount = schools.length;

      const schoolsGroupedByProduct = schools.reduce((acc, school) => {
        acc[school.product] = (acc[school.product] || 0) + 1;
        return acc;
      }, {});

      this.schoolsCountByProduct = Object.keys(schoolsGroupedByProduct).map(product => ({ product, count: schoolsGroupedByProduct[product] }));
    });
    // this.apiService.getSchoolsCount().subscribe(schoolsCount => this.schoolsCount = schoolsCount);

    this.apiService.getInvoices().subscribe(invoices => {
      this.totalRevenue = invoices.reduce((total, invoice) => total + invoice.amount, 0);
      const revenueGroupedByProduct = new Map<string, number>();

      invoices.forEach(invoice => {
        const product = invoice.product;
        const amount = invoice.amount;

        if (revenueGroupedByProduct.has(product)) {
          revenueGroupedByProduct.set(product, revenueGroupedByProduct.get(product) + amount);
        } else {
          revenueGroupedByProduct.set(product, amount);
        }
      });

      this.totalRevenueByProduct = Array.from(revenueGroupedByProduct.entries()).map(([product, totalRevenue]) => ({ product, totalRevenue }));
    });
    this.apiService.getBouncedChequesCount().subscribe(bouncedChequesCount => this.bouncedChequesCount = bouncedChequesCount);
  }

  toggleExpandSchoolsCount(): void {
    this.expandSchoolsCount = !this.expandSchoolsCount;
  }
}
