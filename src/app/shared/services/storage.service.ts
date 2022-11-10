import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICourse } from '../interfaces/course.interface';
import { IExternalLinks } from '../interfaces/external-links';
import { IProject } from '../interfaces/projects.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  //$ Variables de PROJECTS
  private _projects: IProject[] = [];
  set projects(value: IProject[]) {
    this._projects = [...value];
    this._subjectProjects$.next([...this.projects]);
  }
  get projects(): IProject[] {
    return [...this._projects];
  }

  //? Creamos un observable para recibir cada vez que los projectos cambien
  private _subjectProjects$: Subject<IProject[]> = new Subject<IProject[]>();

  public obsProjects: Observable<IProject[]>;

  //? Proyectos iniciales
  // private _initProjects: IProject[] = [
  //   {
  //     title: 'Redux',
  //     description: 'desde abosulto cero',
  //   },
  //   {
  //     title: 'NGRX',
  //     description: 'Redux con Angular',
  //   },
  //   {
  //     title: 'To-Do App',
  //     description: 'Aplicación con un estado más complejo',
  //   },
  //   {
  //     title: 'Ingresos y reintegros App',
  //     description: 'Éstilo y funcionalidades básicas',
  //   },
  //   {
  //     title: 'Autenticación de aplicación',
  //     description: 'Login y registro',
  //   },
  //   {
  //     title: 'Redux en nuestra App',
  //     description: 'Fin de la autenticación',
  //   },
  //   {
  //     title: 'Módulo',
  //     description: 'Ingresos y reintegros',
  //   },

  //   {
  //     title: 'NGRX',
  //     description: 'Con LazyLoad',
  //   },
  //   {
  //     title: 'Despliegue en Firebase',
  //     description: 'Sección bonus',
  //   },
  //   {
  //     title: 'Effects App',
  //     description: 'Ngrx/effects',
  //   },
  //   {
  //     title: 'Más efectos',
  //     description: 'Ngrx/effects',
  //   },
  // ];

  //$ Variables estaticas
  //? Curso actual de la Pagina
  // public actualCourse: Readonly<ICourse> = {
  //   _id: 1,
  //   title: 'NGRX - REDUX en Angular ',
  //   subtitle: 'Desde las bases hasta la práctica',
  //   link: 'https://www.udemy.com/course/redux-ngrx-angular',
  //   isComplete: function () {
  //     return !!this.linkCertificatePdf;
  //   },
  //   description:
  //     'Este curso esta enfocado en implementar correctamente el patrón REDUX en aplicaciones de Angular utilizando los paquetes que el ngrx nos ofrece ',
  //   projects: this.projects,
  //   author: {
  //     _id: 1,
  //     name: 'Fernando Herrera',
  //     links: {
  //       personal: 'https://fernando-herrera.com/#/',
  //       udemy: 'https://www.udemy.com/user/550c38655ec11/',
  //     },
  //   },
  //   techs: () => {
  //     return {
  //       frontend: {
  //         framework: 'Angular',
  //         language: 'TypeScript',
  //         tag: 'HTML',
  //         style: 'Scss',
  //       },
  //     };
  //   },
  // };

  //? Todos los cursos realizados o guardados por hacer

  //? Objeto con información de rutas externas
  public links: Readonly<IExternalLinks> = {
    email: 'cv2mario@gmail.com',
    github: 'https://github.com/CartagoGit',
    portafolios: '#',
    linkedin: 'https://www.linkedin.com/in/mario-cabrero-volarich/',
    certificatesGithub: 'https://github.com/CartagoGit/Certificados',
  };

  //$ Constructor
  constructor() {
    // this.projects = this._initProjects;
    this.obsProjects = this._subjectProjects$.asObservable();
  }
}
