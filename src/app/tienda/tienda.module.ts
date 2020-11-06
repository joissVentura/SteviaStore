import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { ProductPostreComponent } from './componentes/product-postre/product-postre.component';
import { ProductRopaComponent } from './componentes/product-ropa/product-ropa.component';
import { ProductBebidaComponent } from './componentes/product-bebida/product-bebida.component';
import { NavComponent } from './componentes/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProductTodoComponent } from './componentes/product-todo/product-todo.component';
import { ProductGridComponent } from './componentes/product-grid/product-grid.component';
import { MaterialModule } from '../material/material.module';
import { ProductDetailComponent } from './componentes/product-detail/product-detail.component';


@NgModule({
  declarations: [TiendaComponent, ProductPostreComponent, ProductRopaComponent,
    ProductBebidaComponent, NavComponent, ProductTodoComponent, ProductGridComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    TiendaRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule
  ]
})
export class TiendaModule { }
