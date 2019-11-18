import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material';

import { CaseconfigRoutingModule } from './caseconfig-routing.module';
import { CaseconfigComponent } from './caseconfig.component';

import { PatientDataService } from '../../../patient-data/patient-data.service';


@NgModule({
  declarations: [CaseconfigComponent],
  imports: [
    CommonModule,
    CaseconfigRoutingModule,
    MatTableModule
  ],
  providers: [PatientDataService],
})
export class CaseconfigModule { }
