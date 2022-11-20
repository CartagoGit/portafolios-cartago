import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ContainerModule } from './container/container.module';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ContainerModule,
    PagesModule,
    ComponentsModule,
  ],
  exports: [],
})
export class SharedModule {}
