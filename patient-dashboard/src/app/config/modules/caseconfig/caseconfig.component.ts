import { Component, OnInit, Input } from '@angular/core';
import { PatientDataService } from '../../../patient-data/patient-data.service';
import {MatInputModule} from '@angular/material/input';
import { HttpErrorResponse } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  id: number;
  dob: number;
  accessionNumber: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', dob: 1.0079, accessionNumber: 'H'},
  {id: 2, name: 'Helium', dob: 4.0026, accessionNumber: 'He'},
  {id: 3, name: 'Lithium', dob: 6.941, accessionNumber: 'Li'},
  {id: 4, name: 'Beryllium', dob: 9.0122, accessionNumber: 'Be'},
  {id: 5, name: 'Boron', dob: 10.811, accessionNumber: 'B'},
  {id: 6, name: 'Carbon', dob: 12.0107, accessionNumber: 'C'},
  {id: 7, name: 'Nitrogen', dob: 14.0067, accessionNumber: 'N'},
  {id: 8, name: 'Oxygen', dob: 15.9994, accessionNumber: 'O'},
  {id: 9, name: 'Fluorine', dob: 18.9984, accessionNumber: 'F'},
  {id: 10, name: 'Neon', dob: 20.1797, accessionNumber: 'Ne'},
];

@Component({
  selector: 'app-caseconfig',
  templateUrl: './caseconfig.component.html',
  styleUrls: ['./caseconfig.component.css']
})
export class CaseconfigComponent implements OnInit {

  patientList:any;dataSource;

  @Input('mat-autosize')
  matAutosize: boolean

  constructor(private patientDataService:PatientDataService) { }

  ngOnInit() {
    this.patientDataService.getPatientDataList().subscribe(
      data => {
        this.dataSource = data;
        console.log(this.patientList)
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  displayedColumns: string[] = ['id', 'name', 'dob', 'accessionNumber'];
  //dataSource = ELEMENT_DATA;

}
