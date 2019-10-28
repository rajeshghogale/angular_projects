import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
//import { of } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {

  patients:any=[];

  constructor(private http: HttpClient) { 
    
  }

  getPatientDataList() {
    return this.http.get('/assets/patientList.json').subscribe(
      data => {
        this.patients = data;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
