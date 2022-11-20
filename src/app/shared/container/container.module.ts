import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container.component';
import { SharedRoutingModule } from '../shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [ContainerComponent ,TopbarComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule, SharedRoutingModule, ComponentsModule
  ]
})
export class ContainerModule { }
