import { ListaColetaComponent } from './lista-coleta/lista-coleta.component';
import { GerenciarColetaComponent } from './gerenciar-coleta/gerenciar-coleta.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
