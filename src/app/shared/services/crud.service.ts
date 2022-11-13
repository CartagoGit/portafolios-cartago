import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import {
  TNameModels,
  TArrayModel,
  TModel,
} from '../interfaces/storage.interface';

import { environment } from '../../../core/environments/environment';
import { IResponse } from '../interfaces/storage.interface';

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

  //GROUP-SECTION - MODELOS
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

  public getById(
    typeModel: TNameModels,
    id: string | number
  ): Observable<TModel> {
    const fullUrl =
      this._createUrl(typeModel, this._endpoints.getById) + '/' + id;
    return this._http.get<IResponse>(fullUrl).pipe(
      map((resp) => {
        if (resp.ok)
          return resp[typeModel.slice(0, typeModel.length - 1)] as TModel;
        else throw throwError(() => new Error(resp.msg));
      })
    );
  }

  //!GROUP-SECTION - MODELOS
  //#endregion

  // !GROUP - Metodos
  //#endregion
}
