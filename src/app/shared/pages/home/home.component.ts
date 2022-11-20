import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { IExternalLinks } from '../../interfaces/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // !! Habrá que crear un componente exclusivo para mostrar la información del curso actual
  public links: IExternalLinks = this._storageSvc.links;

  constructor(private _storageSvc: StorageService) {}

  ngOnInit(): void {}

  //!! notificar al usuario que se ha copiado el email al portapapeles
  public copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }
}
