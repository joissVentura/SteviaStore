import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'tienda',
        loadChildren: () => import ('./tienda/tienda.module').then(t => t.TiendaModule)
      },
      {
        path: 'nosotros',
        loadChildren: () => import('./nosotros/nosotros.module').then(n => n.NosotrosModule)
      },
      {
        path: 'carrito',
        loadChildren: () => import('./order/order.module').then(o => o.OrderModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
