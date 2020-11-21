import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { TabMenuModule } from 'primeng/tabmenu';

import { CadastroComponent } from './cadastro/cadastro.component';
import { InputMaskModule } from 'primeng/inputmask';
import { PanelModule } from 'primeng/panel';

import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';

import { SegurancaModule } from './seguranca/seguranca-module';
import { CoreModule } from './core/core.module';

import { ColetasModule } from './coletas/coletas.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    CoreModule,
    SegurancaModule,
    ColetasModule,
    AppRoutingModule,
    SharedModule,

    FormsModule,
    PanelModule,


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
    CalendarModule,
    InputMaskModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-PT' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
