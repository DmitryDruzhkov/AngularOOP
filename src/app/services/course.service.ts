import { Injectable } from '@angular/core';
import { courses } from '../shared/constants';
import { Course, MathCourse } from '../shared/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public getCourseEntity(type: string, name: string, price: number) {
    return courses.hasOwnProperty(type) ? (new (courses as  { [key: string]: any })[type](type, name, price)) : new Course('N/A', 'N/A', 0);
  }
}
