import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaColetaComponent } from './nova-coleta/nova-coleta.component';
import { GerenciarColetaComponent } from './gerenciar-coleta/gerenciar-coleta.component';

import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SharedModule } from '../shared/shared.module';
import { ColetaRoutingModule } from './coleta-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';



@NgModule({
  declarations: [
    NovaColetaComponent,
    GerenciarColetaComponent,
  ],
  exports: [
    NovaColetaComponent,
    GerenciarColetaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ColetaRoutingModule,

    PanelModule,
    TableModule,
    ConfirmDialogModule,
    CalendarModule,
    CheckboxModule,
  ]
})
export class ColetasModule { }
