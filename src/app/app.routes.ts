import { Routes } from '@angular/router';
import { SchoolsComponent } from './components/schools/schools.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


export const routes: Routes = [
  { path: 'schools', component: SchoolsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
];
