import { IAuthor } from './author.interface';
import { ICourse } from './course.interface';
import { IProject } from './projects.interface';

export type TNameModels = 'courses' | 'projects' | 'authors';
export type TLastNameModels = 'lastCourse' | 'lastProject' | 'lastAuthor';
export type TModel = ICourse | IProject | IAuthor;
export type TArrayModel = ICourse[] | IProject[] | IAuthor[];

export type IResponse = {
  ok: boolean;
  msg: string;
  [key: string]: TArrayModel | string | boolean | TModel;
};
