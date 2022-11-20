import { TSocialPosition } from '../../interfaces/position.interface';
import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { IExternalLinks, TLink } from '../../interfaces/storage/constants';

@Component({
  selector: 'shared-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent implements OnInit {
  /**
   * ? Posición del componente
   */
  @Input('position') position: TSocialPosition = 'bottom';

  public links: IExternalLinks[] = [...this._storageSvc.links];

  //ANCHOR
  constructor(private _storageSvc: StorageService) {}

  ngOnInit(): void {}

  /**
   * ? Método para ir a la dirección del botón
   * @param link - string con la dirección de destino
   */
  public clickLink(link: TLink): void {
    console.log(link);
  }

  // FIXME notificar al usuario que se ha copiado el email al portapapeles
  // TODO mostrar mensaje de que el email se ha copiado al portapapeles
  public copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }
}
