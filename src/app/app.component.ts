import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CourseService } from './services/course.service';
import { DataService } from './services/data.service';
import { Course } from './shared/courses';
import { CourseRes } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public courses!: Observable<Course[]>;

  constructor(
    private courseService: CourseService,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.courses = this.dataService.getCourses().pipe(
      map((res: CourseRes[]) => {
        return res.map(({ type, name, price }) =>
          this.courseService.getCourseEntity(type, name, price)
        );
      })
    );
  }
}
