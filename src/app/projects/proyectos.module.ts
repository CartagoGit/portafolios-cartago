import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduxDesdeCeroModule } from './redux-desde-cero/redux-desde-cero.module';
import { ProyectosRoutingModule } from './proyectos-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProyectosRoutingModule, ReduxDesdeCeroModule],
})
export class ProyectosModule {}
