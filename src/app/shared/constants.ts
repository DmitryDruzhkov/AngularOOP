import { EngCourse, HistCourse, JavaCourse, MathCourse, NodeCourse } from "./courses";
import { CourseRes } from "./interfaces";

export enum CoursesEnum {
  MATH = 'math',
  ENG = 'eng',
  HIST = 'hist',
  JAVA = 'java',
  NODE = 'node'
}

export const courses = {
  math: MathCourse,
  eng: EngCourse,
  hist: HistCourse,
  java: JavaCourse,
  node: NodeCourse,
}

export const corsesData: CourseRes[] = [
  {
    type: CoursesEnum.MATH,
    name: CoursesEnum.MATH,
    price: 150,
  },
  {
    type: CoursesEnum.ENG,
    name: CoursesEnum.ENG,
    price: 20,
  },
  {
    type: CoursesEnum.HIST,
    name: CoursesEnum.HIST,
    price: 200,
  },
  {
    type: CoursesEnum.JAVA,
    name: CoursesEnum.JAVA,
    price: 70,
  },
  {
    type: CoursesEnum.NODE,
    name: CoursesEnum.NODE,
    price: 50,
  },
];
