import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TNameModels, TArrayModel } from '../interfaces/storage.interface';

import { environment } from '../../../core/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private _apiUrl = environment.urlApi;

  private _endpoints = {
    getAll: '/get-all',
    getById: '/get-by-id', //get-by-id/:id
    getByQuery: '/get-by-query', //get-by-query?XXX=YYY
    createNew: '/create-new',
    update: '/update', //update/:id
    delete: '/delete', //delete/:id
  };

  constructor(private _http: HttpClient) {}

  private _createUrl(typeModel: TNameModels, endpoints: string): string {
    return this._apiUrl + '/' + typeModel + endpoints;
  }

  public getAll(typeModel: TNameModels): Observable<TArrayModel[]> {
    const fullUrl = this._createUrl(typeModel, this._endpoints.getAll);
    return this._http.get<TArrayModel[]>(fullUrl);
  }
}
