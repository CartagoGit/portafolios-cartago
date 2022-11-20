import { IAuthor } from './author.interface';
import { ICourse } from './course.interface';
import { IDates } from './dates.interface';
import { IStates } from './states.interface';

export interface IProject {
  _id: string | number;
  title: string;
  description: string;
  githubCartago?: string;
  githubCourse?: string;
  course?: ICourse;
  author?: IAuthor;
  dates: IDates;
  states: IStates;
}
