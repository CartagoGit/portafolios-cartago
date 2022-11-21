import { TSocialPosition } from '../../interfaces/position.interface';
import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { IExternalLinks, TLink } from '../../interfaces/storage/constants';
import { ToastService } from '../toast/services/toast.service';

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
  constructor(
    private _storageSvc: StorageService,
    private _toastSvc: ToastService
  ) {}

  ngOnInit(): void {}

  /**
   * ? Método para ir a la dirección del botón
   * @param linkType - typo del link
   * @param link - string con la dirección de destino
   */
  public clickLink(linkType: TLink, link: string): void {
    if (linkType === 'email') this._copyToClipboard(link);
    //TODO el resto de posibles links
    else if (linkType === 'internal') console.log('internal');
    else if (linkType === 'external') console.log('external');
  }

  // FIXME notificar al usuario que se ha copiado el email al portapapeles
  // TODO mostrar mensaje de que el email se ha copiado al portapapeles
  private _copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    this._toastSvc.show({
      title: 'El email se ha copiado al portapapeles',
      content: text,
      type: 'success'
    });
  }
}
