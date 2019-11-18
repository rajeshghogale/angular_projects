import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteconfigRoutingModule } from './siteconfig-routing.module';
import { SiteconfigComponent } from './siteconfig.component';


@NgModule({
  declarations: [SiteconfigComponent],
  imports: [
    CommonModule,
    SiteconfigRoutingModule
  ]
})
export class SiteconfigModule { }
