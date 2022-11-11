import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICourse } from '../interfaces/course.interface';
import { IExternalLinks } from '../interfaces/external-links';
import { IProject } from '../interfaces/projects.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  /**
   * ? Lista de Proyectos
   */
  private _projects: IProject[] = [];
  set projects(value: IProject[]) {
    this._projects = [...value];
    this._subjectProjects$.next([...this.projects]);
  }
  get projects(): IProject[] {
    return [...this._projects];
  }

  /**
   * ? Subject de lista de proyectos
   */
  private _subjectProjects$: Subject<IProject[]> = new Subject<IProject[]>();

  /**
   * ? Observable de la lista de proyectos
   */
  public obsProjects: Observable<IProject[]> =
    this._subjectProjects$.asObservable();

  /**
   * ? Lista de Cursos
   */
  private _courses: ICourse[] = [];
  set courses(value: ICourse[]) {
    this._courses = [...value];
    this._subjectCourses$.next([...this.courses]);
  }
  get courses(): ICourse[] {
    return [...this._courses];
  }

  /**
   * ? Subject de lista de cursos
   */
  private _subjectCourses$: Subject<ICourse[]> = new Subject<ICourse[]>();

  /**
   * ? Observable de la lista de cursos
   */
  public obsCourses: Observable<ICourse[]> =
    this._subjectCourses$.asObservable();

  /**
   * ? Información de rutas externas a la aplicación
   */
  public links: Readonly<IExternalLinks> = {
    email: 'cv2mario@gmail.com',
    github: 'https://github.com/CartagoGit',
    portafolios: '#',
    linkedin: 'https://www.linkedin.com/in/mario-cabrero-volarich/',
    certificatesGithub: 'https://github.com/CartagoGit/Certificados',
  };

  /**
   * ? Tipo a mostrar en el panel derecho
   */
  public tipoRightPanel: Readonly<'courses' | 'projects'> = 'courses';

  //$ Constructor
  constructor() {
    // this.projects = this._initProjects;
  }
}
