import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import {CheckboxModule} from 'primeng/checkbox';
import {MenuModule} from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ListaColetaComponent } from './lista-coleta/lista-coleta.component';
import {SidebarModule} from 'primeng/sidebar';
import {TabMenuModule} from 'primeng/tabmenu';

import { GerenciarColetaComponent } from './gerenciar-coleta/gerenciar-coleta.component';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InputMaskModule } from 'primeng/inputmask';
import {PanelModule} from 'primeng/panel';

import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { AuthService } from './seguranca/auth.service';
import { CommonModule } from '@angular/common';
import { SegurancaModule } from './seguranca/seguranca-module';
import { ErrorHandlerService } from './core/error-handler.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { AuthGuard } from './seguranca/auth.guard';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';









@NgModule({
  declarations: [
    AppComponent,
    ListaColetaComponent,
    GerenciarColetaComponent,
    CadastroComponent

  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,


    CoreModule,
    LoginModule,
    SegurancaModule,
    AppRoutingModule,
    PanelModule,
    FormsModule,



    BrowserModule,
    
    ButtonModule,
    TableModule,
    InputTextModule,
    TooltipModule,
    CheckboxModule,
    MenuModule,
    RippleModule,
    BrowserAnimationsModule,
    SidebarModule,
    TabMenuModule,
  
    InputMaskModule,
  
    CalendarModule,
    HttpClientModule,
    // ErrorHandlerService,
    SegurancaModule,
    ToastModule,
    ConfirmDialogModule
  
  
 







  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
