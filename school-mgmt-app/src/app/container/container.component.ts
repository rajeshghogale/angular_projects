import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.services';
import { ContainerService } from './container.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  products: any;

  constructor( private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.getCourseData().subscribe( data => 
      this.products = data 
    );
    console.log('products ',this.products)
  }

}
