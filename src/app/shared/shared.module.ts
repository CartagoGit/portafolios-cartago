import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContainerModule } from './container/container.module';
import { SocialLinksComponent } from './components/social-links/social-links.component';

@NgModule({
  declarations: [HomeComponent, SocialLinksComponent],
  imports: [CommonModule, SharedRoutingModule, ContainerModule],
  exports: [],
})
export class SharedModule {}
