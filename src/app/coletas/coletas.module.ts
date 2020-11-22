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
import { DialogModule } from 'primeng/dialog';



import { AgmCoreModule } from '@agm/core';            // @agm/core
import { AgmDirectionModule } from 'agm-direction';
import { AtualizarColetaComponent } from './atualizar-coleta/atualizar-coleta.component';   // agm-direction

@NgModule({
  declarations: [
    NovaColetaComponent,
    GerenciarColetaComponent,
    AtualizarColetaComponent,
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
    DialogModule,



    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyDZJfPgnA3e77_iJxb_cMmTihlapPNYKwk',
    }),
    AgmDirectionModule,     // agm-direction
  ]
})
export class ColetasModule { }
