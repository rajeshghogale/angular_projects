import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {

  patients:any=[];

  constructor(private http: HttpClient) { 
    
  }

  getPatientDataList() {
    return this.http.get('/assets/patientList.json');
  }

}
