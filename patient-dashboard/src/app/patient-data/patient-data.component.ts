import { Component, OnInit } from '@angular/core';
import { PatientDataService } from './patient-data.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.css']
})
export class PatientDataComponent implements OnInit {

  patientList;
  selectedPatientData;
  showDetails:Boolean = false;

  constructor(private patientDataService:PatientDataService,private http: HttpClient ) { }

  ngOnInit() {
    this.patientDataService.getPatientDataList().subscribe(
      data => {
        this.patientList = data;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  selectedPatient(patient){
    this.showDetails = true;
    this.selectedPatientData = patient;
    console.log(patient);
  }

}
