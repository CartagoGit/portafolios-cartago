import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container.component';
import { SharedRoutingModule } from '../shared-routing.module';



@NgModule({
  declarations: [ContainerComponent ,TopbarComponent, SidebarComponent],
  imports: [
    CommonModule, SharedRoutingModule
  ]
})
export class ContainerModule { }
