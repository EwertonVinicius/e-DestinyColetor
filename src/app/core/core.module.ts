import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenuComponent } from './menu/menu.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { ErrorHandlerService } from './error-handler.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthService } from '../seguranca/auth.service';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { ViaCepService } from './via-cep.service';
import { Title } from '@angular/platform-browser';
import { TooltipModule } from 'primeng/tooltip';
import { ColetorService } from './coletor.service';
import { ColetaService } from '../coletas/coleta.service';
import { SolicitacaoService } from './solicitacao.service';

@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    ConfirmDialogModule,
    TooltipModule,
  ],
  declarations: [
    MenuComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  exports: [
    MenuComponent,
    ToastModule,
    ConfirmDialogModule,
    TooltipModule
  ],
  providers: [
    ErrorHandlerService,
    MessageService,
    ConfirmationService,
    ViaCepService,
    ColetorService,
    ColetaService,
    SolicitacaoService,

    Title,
    { provide: LOCALE_ID, useValue: 'pt-BR' },

    AuthService,
    HttpClient,
    JwtHelperService,
    JwtModule
  ]
})
export class CoreModule { }
