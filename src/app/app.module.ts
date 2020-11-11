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
import { ConfirmationService, MessageService } from 'primeng/api';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { AuthGuard } from './seguranca/auth.guard';
import { PaginaNaoEncontradaComponent } from './seguranca/pagina-nao-encontrada.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';






const rotas: Routes = [
  { path: '', redirectTo:  'login', pathMatch: 'full',  },
  { path: 'gerenciar', component: GerenciarColetaComponent, canActivate: [AuthGuard] },
  { path: 'nova', component: ListaColetaComponent, canActivate: [AuthGuard] },
  { path: 'novoColetor/:codigo', component: CadastroComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo:  'pagina-nao-encontrada' }
  


];


@NgModule({
  declarations: [
    AppComponent,
    ListaColetaComponent,
    MenuComponent,
    GerenciarColetaComponent,
    CadastroComponent,
    PaginaNaoEncontradaComponent
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
    ToastModule,
    ConfirmDialogModule
  
 







  ],
  providers: [AuthService, HttpClient, JwtHelperService, JwtModule, MessageService, ErrorHandlerService, Title, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
