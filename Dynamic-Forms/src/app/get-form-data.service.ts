import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetFormDataService {

  constructor(private http: HttpClient) { }

  getDynamicFormData() {
    return this.http.get('/assets/dynamic-form.json');
    // const url = 'assets/dynamic-form.json';
    // return this.http.get(url)
    //     .map(x => x.json());
  }
}
