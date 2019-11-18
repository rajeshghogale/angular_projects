import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseconfigComponent } from './caseconfig.component';

const routes: Routes = [
  { path: '', component: CaseconfigComponent },
 // {path '/childconfig'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseconfigRoutingModule { }
