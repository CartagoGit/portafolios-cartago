import { Component, HostBinding } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'container-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  //? Iniciamos el sidebar cerrado
  @HostBinding('class.expanded') isExpanded: boolean = false;

  public list: any[] = [];

  constructor(public storageSvc: StorageService) {}
}
