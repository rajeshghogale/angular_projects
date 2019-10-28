import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';



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
    CaseAutomationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [PatientDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
