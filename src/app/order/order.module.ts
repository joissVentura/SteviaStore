import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './componentes/order/order.component';
import { MaterialModule } from '../material/material.module';
import { UniquesPipe } from '../shared/uniques/uniques.pipe';
import { FormClientComponent } from './componentes/form-client/form-client.component';
@NgModule({
  declarations: [OrderComponent, FormClientComponent,
    UniquesPipe],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule
  ]
})
export class OrderModule { }
