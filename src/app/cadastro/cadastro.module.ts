import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import {MenuModule} from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { SegurancaModule } from '../seguranca/seguranca-module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { CadastroComponent } from './cadastro.component';




@NgModule({

 

  declarations: [ CadastroComponent],
  imports: [
    CommonModule,
    PanelModule,
    FormsModule,
    SharedModule,
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
    ConfirmDialogModule,
    
  ]
})
export class CadastroModule { }
