import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppConfigComponent } from './config/config.component';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CaseAutomationComponent } from './case-automation/case-automation.component';
import { ConfirmDeactivateGuard } from './ConfirmDeactivateGuard';


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
    component: CaseAutomationComponent,
    canDeactivate: [ConfirmDeactivateGuard]
  },
  { path: 'caseconfig', loadChildren: () => import('./config/modules/caseconfig/caseconfig.module').then(m => m.CaseconfigModule) },
  { path: 'siteconfig', loadChildren: () => import('./config/modules/siteconfig/siteconfig.module').then(m => m.SiteconfigModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
