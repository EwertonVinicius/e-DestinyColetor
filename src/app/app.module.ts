import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
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
import { MenuComponent } from './menu/menu.component';
import { GerenciarColetaComponent } from './gerenciar-coleta/gerenciar-coleta.component';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InputMaskModule } from 'primeng/inputmask';
import {PanelModule} from 'primeng/panel';

import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './seguranca/login.component';
import { AuthService } from './seguranca/auth.service';
import { CommonModule } from '@angular/common';
import { SegurancaModule } from './seguranca/seguranca-module';
import { ErrorHandlerService } from './seguranca/error-handler.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';




const rotas: Routes = [
  { path: 'gerenciar', component: GerenciarColetaComponent },
  { path: 'nova', component: ListaColetaComponent },
  { path: 'novoColetor', component: CadastroComponent },
  { path: 'login', component: LoginComponent }
  


];


@NgModule({
  declarations: [
    AppComponent,
    ListaColetaComponent,
    MenuComponent,
    GerenciarColetaComponent,
    CadastroComponent
    // LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    RouterModule.forRoot(rotas),
    InputMaskModule,
    PanelModule,
    FormsModule,
    CalendarModule,
    HttpClientModule,
    // ErrorHandlerService,
    SegurancaModule,
    ToastModule
 







  ],
  providers: [AuthService, HttpClient, JwtHelperService, JwtModule, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
