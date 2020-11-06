import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { ProductPostreComponent } from './componentes/product-postre/product-postre.component';
import { ProductRopaComponent } from './componentes/product-ropa/product-ropa.component';
import { ProductBebidaComponent } from './componentes/product-bebida/product-bebida.component';
import { ProductTodoComponent } from './componentes/product-todo/product-todo.component';
import { ProductDetailComponent } from './componentes/product-detail/product-detail.component';

const routes: Routes = [
  {
    path : '',
    component: TiendaComponent,
    children:[
      {
        path: '',
        redirectTo: '/tienda/all',
        pathMatch: 'full'
      },
      {
        path: 'productos/:id',
        component: ProductDetailComponent
      },
      {
        path: 'all',
        component: ProductTodoComponent
      },
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
