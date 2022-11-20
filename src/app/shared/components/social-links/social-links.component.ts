import { TSocialPosition } from '../../interfaces/position.interface';
import { Component, Input } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { IExternalLinks } from '../../interfaces/storage/constants';

@Component({
  selector: 'shared-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent {
  /**
   * ? Posición del componente
   */
  //TODO - Cambiar a indeterminado cuando se termine de testear el componente
  @Input('position') position: TSocialPosition = 'bottom';

  // !! Habrá que crear un componente exclusivo para mostrar la información del curso actual
  public links: IExternalLinks = this._storageSvc.links;

  constructor(private _storageSvc: StorageService) {}

  //!! notificar al usuario que se ha copiado el email al portapapeles
  public copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }
}
