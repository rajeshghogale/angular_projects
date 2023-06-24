import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: any;

  constructor(private httpClient: HttpClient) {     
  }

  getCourseData() {
    return this.httpClient.get("assets/data/courses.json");
  }
}
