import { CoursesEnum } from "./constants";

export interface CourseRes {
  type: CoursesEnum;
  name: string;
  price: number;
}
