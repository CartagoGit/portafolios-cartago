import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IAuthor } from '../interfaces/author.interface';
import { ICourse } from '../interfaces/course.interface';
import { IExternalLinks, IWebOwner } from '../interfaces/constants';
import { IProject } from '../interfaces/projects.interface';
import { TArrayModel, TNameModels } from '../interfaces/storage.interface';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  //GROUP - Variables
  //#region

  //GROUP-SECTION - Información fija
  // #region
  /**
   * ? Información del dueño o creador de la web
   */
  public webOwner: Readonly<IWebOwner> = {
    name: 'Mario',
    subname: 'Cabrero Volarich',
    nick: 'Cartago',
    subnick: 'Nova',
    completeName() {
      return this.name + ' ' + this.subname;
    },
    completeNick() {
      return this.nick + ' ' + this.subnick;
    },
  };

  /**
   * ? Información de rutas externas a la aplicación
   */
  public links: Readonly<IExternalLinks> = {
    email: 'cv2mario@gmail.com',
    github: 'https://github.com/CartagoGit',
    portafolios: '#',
    linkedin: 'https://www.linkedin.com/in/mario-cabrero-volarich',
    certificatesGithub: 'https://github.com/CartagoGit/Certificados',
  };

  /**
   * ? Logo en mensaje de bienvenida en ASCII - DEPRECTATED mientras se use la imagen de logotipo
   */
  private _logoAscii: Readonly<string> = `
    ████████                       █████
  ███░░░░░███                     ░░███
 ███     ░░░   ██████   ████████  ███████    ██████    ███████  ██████
░███          ░░░░░███ ░░███░░███░░░███░    ░░░░░███  ███░░███ ███░░███
░███           ███████  ░███ ░░░   ░███      ███████ ░███ ░███░███ ░███
░░███     ███ ███░░███  ░███       ░███ ███ ███░░███ ░███ ░███░███ ░███
 ░░█████████ ░░████████ █████      ░░█████ ░░████████░░███████░░██████
  ░░░░░░░░░   ░░░░░░░░ ░░░░░        ░░░░░   ░░░░░░░░  ░░░░░███ ░░░░░░
                                                      ███ ░███
                                                     ░░██████
                                                      ░░░░░░
  `;

  /**
   * ? Source del logotipo
   */
  private _logoImg: Readonly<string> = 'assets/images/logos/Cartago_logo.png';

  /**
   * ? Información a mostrar en consola nada mas iniciar la aplicación
   */
  public initConsoleMessage = {
    nameGroup: 'Information - Web owner',
    groupFontColor: '#f5f5f5f5',
    groupBackgroundColor: 'linear-gradient(215deg, #45aee0 0%, #513192 100%)',
    groupAdditionalCss:
      'border-radius: 5px; padding: 0px 5px; border: 2px solid #513192; font-size: 18px;',
    titleFontColor: '#896afc',
    titleBackgroundColor: '',
    titleAdditionalCss: 'font-size: 16px',
    dataFontColor: '#45aee0',
    dataBackgroundColor: '',
    dataAdditionalCss: 'font-size: 16px',
    dataToShow: [
      {
        title: 'Name',
        data: this.webOwner.completeName(),
      },
      {
        title: 'Nickname',
        data: this.webOwner.completeNick(),
      },
      {
        title: 'Email',
        data: this.links.email,
      },
      {
        title: 'Github',
        data: this.links.github,
      },
      {
        title: 'Linkedin',
        data: this.links.linkedin,
      },
    ],
    logoToShow: this._logoImg,
  };

  /**
   * ? Tipo a mostrar en el panel derecho
   */
  public tipoRightPanel: Readonly<TNameModels> = 'courses';

  /**
   * ? Array de tipos de modelos
   */
  public modelTypes: TNameModels[] = ['courses', 'authors', 'projects'];

  //!GROUP-SECTION - Información fija
  //#endregion -INFORMACION FIJA

  //GROUP-SECTION - Modelo de datos
  // #region

  //SECTION - PROYECTOS
  // #region

  /**
   * ? Lista de Proyectos
   */
  private _projects: IProject[] = [];
  set projects(value: IProject[]) {
    this._projects = [...value];
    this._subjectProjects$.next([...this._projects]);
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

  //!SECTION
  // #endregion PROYECTOS

  //SECTION - CURSOS
  // #region
  /**
   * ? Lista de Cursos
   */
  private _courses: ICourse[] = [];
  set courses(value: ICourse[]) {
    this._courses = [...value];
    this._subjectCourses$.next([...this._courses]);
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

  //!SECTION
  // #endregion CURSOS

  //SECTION - AUTORES
  // #region

  /**
   * ? Lista de Autores
   */
  private _authors: IAuthor[] = [];
  set authors(value: IAuthor[]) {
    this._authors = [...value];
    this._subjectAuthors$.next([...this._authors]);
  }
  get authors(): IAuthor[] {
    return [...this._authors];
  }

  /**
   * ? Subject de lista de cursos
   */
  private _subjectAuthors$: Subject<IAuthor[]> = new Subject<IAuthor[]>();

  /**
   * ? Observable de la lista de cursos
   */
  public obsAuthors: Observable<IAuthor[]> =
    this._subjectAuthors$.asObservable();

  //!SECTION
  // #endregion - SECTION - AUTORES

  //!GROUP-SECTION
  // #endregion - SECTION - MODELOS DE DATOS

  //!GROUP - Variables
  //#endregion - Variables

  //ANCHOR - Constructor
  constructor(private _crudSvc: CrudService) {
    this.getAllModels();

    //TODO Crear metodo para recuperar la id

    this._crudSvc.getById('projects', '636716716ff6b78ea24ac95a').subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => {
        console.error(
          'Se ha producido un error en la base de datos',
          err.error.msg
        );
      },
    });
  }

  //GROUP - Métodos
  //#region

  /**
   * ? Método para cargar los modelos de la base de datos
   */
  public getAllModels = () => {
    //? Creamos una peticion a la api con cada modelo para recuperar todos los datos y almacenarlos
    for (let model of this.modelTypes) {
      this._crudSvc.getAll(model).subscribe({
        next: (resp: TArrayModel) => {
          this[model] = resp as [];
          console.log(model, this[model]);
        },
        error: (err) => {
          console.error(
            'Se ha producido un error al recuperar ' +
              model +
              ' de la base de datos',
            err.error.msg
          );
        },
      });
    }
  };

  //!GROUP - Métodos
  //#endregion Métodos
}
