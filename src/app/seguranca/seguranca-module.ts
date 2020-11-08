import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';


import { LoginComponent } from './login.component';
import { SegurancaRoutingModule } from './seguranca-routing-module';
import { LogoutService } from './logout.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return '';
        }
      }
    }),

    SegurancaRoutingModule
  ],
  declarations: [LoginComponent],
   providers: [LogoutService]
})
export class SegurancaModule { }