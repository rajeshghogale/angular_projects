import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule,MatFormFieldModule,MatInputModule,MatTableModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { AppConfigComponent } from './config/config.component';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CaseAutomationComponent } from './case-automation/case-automation.component';

import { PatientDataService } from './patient-data/patient-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AgePipePipe } from './pipes/age-pipe.pipe';
import { ModalContentComponent } from './case-automation/modal-content/modal-content.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CanDeactivateComponent } from './can-deactivate/can-deactivate.component';
import { ConfirmDeactivateGuard } from './ConfirmDeactivateGuard';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenubarComponent,
    MainContainerComponent,
    AppConfigComponent,
    PatientDataComponent,
    DashboardComponent,
    CaseAutomationComponent,
    AgePipePipe,
    ModalContentComponent,
    CanDeactivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    HttpClientModule,
    NgbModule,
    FormsModule,ReactiveFormsModule 
  ],
  providers: [PatientDataService],
  bootstrap: [AppComponent],
  entryComponents: [ ModalContentComponent ]
})
export class AppModule { }
