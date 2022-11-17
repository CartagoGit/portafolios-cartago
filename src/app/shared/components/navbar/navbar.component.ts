import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public title: string = 'Portafolios de Mario Cabrero Volarich';
  public inputSearcherPlaceholder : string = 'Buscar...'

  constructor() {}

  ngOnInit(): void {}

  public onClickSearcher(): void {
    //REVIEW - Implementar
    console.log('has pulsado el buscador');
  }
}
