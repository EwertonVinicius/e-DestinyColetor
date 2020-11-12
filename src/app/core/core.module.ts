import { NgModule } from '@angular/core';
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

@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    ConfirmDialogModule
  ],
  declarations: [
    MenuComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  exports: [
    MenuComponent,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    ErrorHandlerService,
    MessageService,
    ConfirmationService,
    AuthService,
    HttpClient,
    JwtHelperService,
    JwtModule
  ]
})
export class CoreModule { }
