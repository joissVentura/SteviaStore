import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { ProductPostreComponent } from './componentes/product-postre/product-postre.component';
import { ProductRopaComponent } from './componentes/product-ropa/product-ropa.component';
import { ProductBebidaComponent } from './componentes/product-bebida/product-bebida.component';

const routes: Routes = [
  {
    path : '',
    component: TiendaComponent,
    children:[
      {
        path: 'postres',
        component: ProductPostreComponent
      },
      {
        path: 'ropa',
        component: ProductRopaComponent
      },
      {
        path: 'bebidas',
        component: ProductBebidaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }
