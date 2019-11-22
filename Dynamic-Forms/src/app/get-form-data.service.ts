import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FieldConfig, Validator } from "./field.interface";

@Injectable({
  providedIn: 'root'
})

export class GetFormDataService {

  constructor(private http: HttpClient) { }

  getDynamicFormData() {
    return this.http.get<FieldConfig[]>('/assets/dynamic-form.json');
    // const url = 'assets/dynamic-form.json';
    // return this.http.get(url)
    //     .map(x => x.json());
  }
}
