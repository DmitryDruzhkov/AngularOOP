import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { corsesData } from '../shared/constants';
import { CourseRes } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public getCourses(): Observable<CourseRes[]> {
    return of([...corsesData]);
  }
}
