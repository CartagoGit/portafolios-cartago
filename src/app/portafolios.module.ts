import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { PortafoliosRoutingModule } from './portafolios-routing.module';
import { ProyectosModule } from './projects/proyectos.module';
import { SharedModule } from './shared/shared.module';
import { ContainerComponent } from './shared/container/container.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PortafoliosRoutingModule,
    SharedModule,
    ProyectosModule,
  ],
  providers: [],
  bootstrap: [ContainerComponent],
})
export class PortafoliosModule {}
