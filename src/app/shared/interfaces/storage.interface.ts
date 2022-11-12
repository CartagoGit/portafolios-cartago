import { IAuthor } from "./author.interface";
import { ICourse } from "./course.interface";
import { IProject } from "./projects.interface";

export type TNameModels = 'courses' | 'projects' | 'authors';
export type TModel = ICourse | IProject | IAuthor;
export type TArrayModel = ICourse[] | IProject[] | IAuthor[]
