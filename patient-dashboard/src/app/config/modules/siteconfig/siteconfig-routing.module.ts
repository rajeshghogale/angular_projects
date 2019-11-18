import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteconfigComponent } from './siteconfig.component';

const routes: Routes = [{ path: '', component: SiteconfigComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteconfigRoutingModule { }
