import { Injectable } from '@angular/core';
import { IToastData, TToasts } from '../interfaces/toast.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  /**
   * ? Data del mensaje toast
   */
  private _data!: IToastData;
  get data(): IToastData {
    return this._data;
  }

  /**
   * ? Subject para abrir el toast
   */
  public open = new Subject<IToastData>();

  //ANCHOR - Constructor
  constructor() {}

  /**
   * ? Inicia el toast
   * @param data - Información a pasar al toast
   */
  public show(data: IToastData) {
    if (data.type) {
      this._data.type = TToasts.error;
    }
    this._data = { ...data, show: true, progressWidth: '100%' };
    this.open.next(this._data);
  }

  /**
   * ? Oculta el toast
   */
  public hide() {
    this._data = { ...this._data, show: false };
    this.open.next(this._data);
  }
}
