import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  courses: any;

  constructor(private httpClient: HttpClient) { 
  }

  getCourseData() {
    const data = this.httpClient.get("assets/data/courses.json").subscribe(data =>{
      console.log(data);
      return data;
    });
    return data;
  }
}
