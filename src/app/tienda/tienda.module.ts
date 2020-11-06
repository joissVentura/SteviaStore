import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { ProductPostreComponent } from './componentes/product-postre/product-postre.component';
import { ProductRopaComponent } from './componentes/product-ropa/product-ropa.component';
import { ProductBebidaComponent } from './componentes/product-bebida/product-bebida.component';


@NgModule({
  declarations: [TiendaComponent, ProductPostreComponent, ProductRopaComponent, ProductBebidaComponent],
  imports: [
    CommonModule,
    TiendaRoutingModule
  ]
})
export class TiendaModule { }
