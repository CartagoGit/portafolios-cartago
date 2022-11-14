import { Component, HostBinding, OnInit } from '@angular/core';
import { IProject } from '../../interfaces/projects.interface';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  //? Iniciamos el sidebar cerrado
  @HostBinding('class.expanded') isExpanded: boolean = false;

  public projects: IProject[] = [];


  constructor(public storageSvc: StorageService) {

  }

  ngOnInit(): void {}

  public expandSidebar(): void {
    this.isExpanded = !this.isExpanded;
  }
}
