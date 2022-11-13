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

  private _createUrl(typeModel: TNameModels, endpoints: string): string {
    return this._apiUrl + '/' + typeModel + endpoints;
  }

  //!GROUP-SECTION - AUXILIARES
  //#endregion

  //GROUP-SECTION - CRUD
  // #region

  public getAll(typeModel: TNameModels): Observable<TArrayModel> {
    const fullUrl = this._createUrl(typeModel, this._endpoints.getAll);
    return this._http.get<IResponse>(fullUrl).pipe(
      map((resp) => {
        if (resp.ok) return resp[typeModel] as TArrayModel;
        else throw throwError(() => new Error(resp.msg));
      })
    );
  }

  public getById(typeModel: TNameModels, id: string): Observable<TModel> {
    const fullUrl =
      this._createUrl(typeModel, this._endpoints.getById) + '/' + id;
    return this._http.get<IResponse>(fullUrl).pipe(
      map((resp) => {
        if (resp.ok) return resp[getSingular(typeModel)] as TModel;
        else throw throwError(() => new Error(resp.msg));
      })
    );
  }

  public getByQuery(
    typeModel: TNameModels,
    query: object
  ): Observable<TArrayModel> {
    const fullUrl = this._createUrl(typeModel, this._endpoints.getByQuery);
    const params = new HttpParams({ fromObject: <any>query });
    return this._http.get<IResponse>(fullUrl, { params }).pipe(
      map((resp) => {
        if (resp.ok) return resp[typeModel] as TArrayModel;
        else throw throwError(() => new Error(resp.msg));
      })
    );
  }

  //!GROUP-SECTION - CRUD
  //#endregion

  // !GROUP - Metodos
  //#endregion
}
