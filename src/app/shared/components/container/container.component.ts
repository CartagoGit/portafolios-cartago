import { Component } from '@angular/core';
import { consoleImg } from '../../helpers/console-image.helper';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  public title: string = 'Portafolios de Mario Cabrero Volarich - CartagoNova';

  //ANCHOR - CONSTRUCTOR
  constructor(private _storageSvc: StorageService) {}

  ngAfterViewInit(): void {
    this._showInitConsoleMessage();
  }

  //GROUP - Metodos
  //#region

  /**
   * ? Metodo para crear el mensaje inicial a mostrar en la consola
   */
  private _showInitConsoleMessage = async (size = 250) => {
    const dataMsg = this._storageSvc.initConsoleMessage;

    //* Creamos el grupo de datos de Información
    console.group(
      '%c' + dataMsg.nameGroup,
      'color:' +
        dataMsg.groupFontColor +
        '; background: ' +
        dataMsg.groupBackgroundColor +
        '; ' +
        dataMsg.groupAdditionalCss
    );
    //* Cargamos la imagen del logo  en la consola
    await consoleImg.load(dataMsg.logoToShow, { size });
    //* Cargamos la lista de datos iniciales
    for (const item of dataMsg.dataToShow) {
      const messageToShow = '%c' + item.title + ': ' + '%c' + item.data;
      const titleCss =
        'color: ' +
        dataMsg.titleFontColor +
        '; background: ' +
        dataMsg.titleBackgroundColor +
        '; ' +
        dataMsg.titleAdditionalCss;

      const dataCss =
        'color: ' +
        dataMsg.dataFontColor +
        '; background: ' +
        dataMsg.dataBackgroundColor +
        '; ' +
        dataMsg.dataAdditionalCss;

      console.log(messageToShow, titleCss, dataCss);
    }
    console.log('\n\n');
    console.groupEnd();
  };

  //!GROUP - Metodos
  //#endregion
}
