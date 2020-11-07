import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [NosotrosComponent],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    MaterialModule
  ]
})
export class NosotrosModule { }
