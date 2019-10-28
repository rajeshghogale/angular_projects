import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppConfigComponent } from './config/config.component';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CaseAutomationComponent } from './case-automation/case-automation.component';


const routes: Routes = [
  {
    path:'',
    component : PatientDataComponent
  },
  {
    path:'config',
    component: AppConfigComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'case-auto',
    component: CaseAutomationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
