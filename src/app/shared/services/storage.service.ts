import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IAuthor } from '../interfaces/storage/author.interface';
import { ICourse } from '../interfaces/storage/course.interface';
import { IExternalLinks, IWebOwner } from '../interfaces/storage/constants';
import { IProject } from '../interfaces/storage/projects.interface';
import {
  TArrayModel,
  TNameModels,
  TLastNameModels,
} from '../interfaces/storage/storage.interface';
import { CrudService } from './crud.service';
import {
  getSingular,
  getLastNameModel,
} from '../helpers/modify-strings.helper';

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
    //TODO Añadir enlace o crear pagina con el curriculum
    curriculum: ''
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
   * ? Información y configruación a mostrar en consola nada mas iniciar la aplicación
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

  /**
   * ? Titulo que aparecerá en el sidebar
   */
  public titleSidebar : string = 'Portafolios'

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
   * ? Último proyecto buscado
   */
  private _lastProject!: IProject;
  set lastProject(value: IProject) {
    this._lastProject = value;
    this._subjectLastProject$.next(value);
  }
  get lastProject(): IProject {
    return this._lastProject;
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
   * ? Subject del ultimo proyecto buscado
   */
  private _subjectLastProject$: Subject<IProject> = new Subject<IProject>();

  /**
   * ? Observable del ultimo proyecto buscado
   */
  public obsLastProject: Observable<IProject> =
    this._subjectLastProject$.asObservable();

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
   * ? Último curso buscado
   */
  private _lastCourse!: ICourse;
  set lastCourse(value: ICourse) {
    this._lastCourse = value;
    this._subjectLastCourse$.next(value);
  }
  get lastCourse(): ICourse {
    return this._lastCourse;
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
   * ? Subject del ultimo curso buscado
   */
  private _subjectLastCourse$: Subject<ICourse> = new Subject<ICourse>();

  /**
   * ? Observable del ultimo curso buscado
   */
  public obsLastCourse: Observable<ICourse> =
    this._subjectLastCourse$.asObservable();

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
   * ? Último autor buscado
   */
  private _lastAuthor!: IAuthor;
  set lastAuthor(value: IAuthor) {
    this._lastAuthor = value;
    this._subjectLastAuthor$.next(value);
  }
  get lastAuthor(): IAuthor {
    return this._lastAuthor;
  }

  /**
   * ? Subject de lista de autores
   */
  private _subjectAuthors$: Subject<IAuthor[]> = new Subject<IAuthor[]>();

  /**
   * ? Observable de la lista de autores
   */
  public obsAuthors: Observable<IAuthor[]> =
    this._subjectAuthors$.asObservable();

  /**
   * ? Subject del ultimo autor buscado
   */
  private _subjectLastAuthor$: Subject<IAuthor> = new Subject<IAuthor>();

  /**
   * ? Observable del ultimo autor buscado
   */
  public obsLastAuthor: Observable<IAuthor> =
    this._subjectLastAuthor$.asObservable();

  //!SECTION
  // #endregion - SECTION - AUTORES

  //!GROUP-SECTION
  // #endregion - SECTION - MODELOS DE DATOS

  //!GROUP - Variables
  //#endregion - Variables

  //ANCHOR - Constructor
  constructor(private _crudSvc: CrudService) {
    // this.getAllModels();

    // //TODO Eliminar las llamadas para probar los metodos
    // this.getById('projects', '636716716ff6b78ea24ac95a');
    // this.getByQuery('authors', { name: 'na' });
    this.getByQuery('authors', { name: 'na' });
  }

  //GROUP - Métodos
  //#region

  //GROUP-SECTION - Peticiones a la api
  // #region

  //SECTION - Peticiones get
  //#region

  /**
   * ? Método para cargar todos los documentos de TODOS los modelos de la base de datos
   */
  public getAllModels = () => {
    //? Creamos una peticion a la api con cada modelo para recuperar todos los datos y almacenarlos
    for (let model of this.modelTypes) {
      this.getAllOneModel(model);
    }
  };

  /**
   * ? Método para cargar todos los documentos de un modelo
   * @param typeModel
   */
  public getAllOneModel = (typeModel: TNameModels) => {
    this._crudSvc.getAll(typeModel).subscribe({
      next: (resp: TArrayModel) => {
        this[typeModel] = resp as [];
        //TODO - Quitar el console cuando terminemos de depurar
        console.log(typeof typeModel, typeModel, this[typeModel]);
      },
      error: (error) => {
        this._crudSvc.showErrorInConsole(error);
      },
    });
  };

  /**
   * ? Método para cargar un documento del modelo indicado
   * @param typeModel
   * @param id
   */
  public getById = (typeModel: TNameModels, id: string) => {
    this._crudSvc.getById(typeModel, id).subscribe({
      next: (resp) => {
        // * Creamos un string con la variable para el ultimo tipo seleccionado del modelo
        const lastNameModel = getLastNameModel(typeModel) as TLastNameModels;
        this[lastNameModel] = resp as any;
        //TODO - Quitar el console cuando terminemos de depurar
        console.log(lastNameModel, this[lastNameModel]);
      },
      error: (error) => {
        this._crudSvc.showErrorInConsole(error);
      },
    });
  };

  /**
   * ? Metodo para recuperar los elementos que coincidan con la query
   * @param typeModel
   * @param params Example -> {name : 'Mario'}
   */
  public getByQuery = (typeModel: TNameModels, params: object) => {
    this._crudSvc.getByQuery(typeModel, params).subscribe({
      next: (resp) => {
        //FIXME - Array con todos los datos que coincidan con el query

        //TODO - Quitar el console cuando terminemos de depurar
        console.log('query', resp);
      },
      error: (error) => {
        this._crudSvc.showErrorInConsole(error);
      },
    });
  };

  //!SECTION - Peticiones Get
  //#endregion

  //FIXME - Hacer la peticion post para crear un documento en los modelos

  //!GROUP-SECTION - Peticiones a la api
  //#endregion

  //!GROUP - Métodos
  //#endregion Métodos
}
