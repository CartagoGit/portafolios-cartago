import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  public title: string = 'Portafolios de Mario Cabrero Volarich';
  public inputSearcherPlaceholder : string = 'Buscar...'

  constructor() {}

  ngOnInit(): void {}

  public onClickSearcher(): void {
    //REVIEW - Implementar
    console.log('has pulsado el buscador');
  }
}
