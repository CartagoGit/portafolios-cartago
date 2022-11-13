import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import {
  TNameModels,
  TArrayModel,
  TModel,
} from '../interfaces/storage.interface';

import { environment } from '../../../core/environments/environment';
import { IResponse } from '../interfaces/storage.interface';
import { getSingular } from '../helpers/modify-strings.helper';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  // GROUP - Variables
  //#region

  private _apiUrl = environment.urlApi;

  private _endpoints = {
    getAll: '/get-all',
    getById: '/get-by-id', //get-by-id/:id
    getByQuery: '/get-by-query', //get-by-query?XXX=YYY
    createNew: '/create-new',
    update: '/update', //update/:id
    delete: '/delete', //delete/:id
  };

  //!GROUP - Variables
  //#endregion

  //ANCHOR - Constructor
  constructor(private _http: HttpClient) {}

  // GROUP - Métodos
  // #region

  //GROUP-SECTION - AUXILIARES
  //#region

  /**
   * ? Método para crear la Url donde se hará la petición
   * @param typeModel
   * @param endpoints
   * @param id !optional
   * @returns {string} Url de la petición
   */
  private _createUrl = (
    typeModel: TNameModels,
    endpoints: string,
    id: string = ''
  ): string => {
    let url = this._apiUrl + '/' + typeModel + endpoints;
    if (id !== '') url = url + '/' + id;
    return url;
  };

  /**
   * ? Método para comprobar si la response es correcta segun la BD o devolver un error y controlarlo
   * @param resp - Respuesta recibida
   * @param argName - Nombre del argumento a devolver por la api
   * @returns {TArrayModel | TModel}
   */

  private _checkResponse = (
    resp: IResponse,
    argName: string
  ): TModel | TArrayModel => {
    if (resp.ok) {
      return resp[argName] as TArrayModel | TModel;
    } else throw throwError(() => new Error(resp.msg));
  };

  /**
   * ? Método para escribir en consola los errores
   * @param error
   */
  public showErrorInConsole = (error: any) => {
    console.error('Se ha producido un error - ', error.error.msg);
  };

  //!GROUP-SECTION - AUXILIARES
  //#endregion

  //GROUP-SECTION - CRUD
  // #region

  //SECTION - GET
  //#region

  /**
   * ? Observable de la peticion para recuperar todos los documentos de un modelo
   * @param typeModel
   * @returns {Observable<TArrayModel>}
   */
  public getAll = (typeModel: TNameModels): Observable<TArrayModel> => {
    const fullUrl = this._createUrl(typeModel, this._endpoints.getAll);
    return this._http.get<IResponse>(fullUrl).pipe(
      map((resp) => {
        return this._checkResponse(resp, typeModel) as TArrayModel;
      })
    );
  };

  /**
   *  ? Observable de la petición para recuperar el documento con una id especifica
   * @param typeModel
   * @param id
   * @returns {Observable<TModel>}
   */
  public getById = (typeModel: TNameModels, id: string): Observable<TModel> => {
    const fullUrl = this._createUrl(typeModel, this._endpoints.getById, id);
    return this._http.get<IResponse>(fullUrl).pipe(
      map((resp) => {
        return this._checkResponse(resp, getSingular(typeModel)) as TModel;
      })
    );
  };

  /**
   * ? Observable de la petición para recuperar los documentos que coincidan con los parametros de la query
   * @param typeModel
   * @param query Example -> {name: 'Mario'}
   * @returns {Observable<TArrayModel>}
   */
  public getByQuery = (
    typeModel: TNameModels,
    query: object
  ): Observable<TArrayModel> => {
    const fullUrl = this._createUrl(typeModel, this._endpoints.getByQuery);
    const params = new HttpParams({ fromObject: <any>query });
    return this._http.get<IResponse>(fullUrl, { params }).pipe(
      map((resp) => {
        return this._checkResponse(resp, typeModel) as TArrayModel;
      })
    );
  };

  //!SECTION - get
  //#endregion

  //SECTION - POST
  //#region

  /**
   * ? Observable de la petición para crear un nuevo documento en el modelo
   * @param typeModel
   * @param params
   * @returns {Observable<TModel>}
   */
  public createNew = (
    typeModel: TNameModels,
    params: object
  ): Observable<TModel> => {
    const fullUrl = this._createUrl(typeModel, this._endpoints.createNew);
    return this._http.post<IResponse>(fullUrl, params).pipe(
      map((resp) => {
        return this._checkResponse(resp, getSingular(typeModel)) as TModel;
      })
    );
  };

  //!SECTION - POST
  //#endregion

  //!GROUP-SECTION - CRUD
  //#endregion

  // !GROUP - Metodos
  //#endregion
}
