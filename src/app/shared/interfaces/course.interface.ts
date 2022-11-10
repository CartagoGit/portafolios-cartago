import { IAuthor } from './author.interface';
import { IDates } from './dates.interface';
import { IProject } from './projects.interface';
import { IStates } from './states.interface';
import { ITechs } from './techs.interface';

export interface ICourse {
  _id: string | number;
  title: string;
  subtitle: string;
  description?: string;
  author?: IAuthor;
  link: string;
  githubCartago?: string;
  githubCourse?: string;
  linkCertificatePdf?: string;
  projects: IProject[];
  techs: () => ITechs; // unico // Devolver las techs de los proyectos
  dates: IDates;
  states: IStates;
}
