import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public title: string = 'Portafolios de Mario Cabrero Volarich';
  public inputSearcherPlaceholder : string = 'Buscar...'

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  public onClickLogo(): void {
    this._router.navigate(['/']);
  }

  public onClickSearcher(): void {
    //REVIEW - Implementar
    console.log('has pulsado el buscador');
  }
}
