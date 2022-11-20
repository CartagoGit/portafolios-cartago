import { Component } from '@angular/core';

@Component({
  selector: 'container-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  public title: string = 'Portafolios de Mario Cabrero Volarich';
  public inputSearcherPlaceholder: string = 'Buscar...';

  constructor() {}

  public onClickSearcher(): void {
    //REVIEW - Implementar
    console.log('has pulsado el buscador');
  }
}
