import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContainerComponent } from './components/container/container.component';
import { TopbarComponent } from './components/topbar/topbar.component';

@NgModule({
  declarations: [ TopbarComponent, SidebarComponent, HomeComponent, ContainerComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [ContainerComponent]
})
export class SharedModule {}
