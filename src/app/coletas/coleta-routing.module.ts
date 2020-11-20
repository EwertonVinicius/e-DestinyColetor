import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { GerenciarColetaComponent } from './gerenciar-coleta/gerenciar-coleta.component';
import { NovaColetaComponent } from './nova-coleta/nova-coleta.component';

const routes: Routes = [
  { path: 'gerenciar', component: GerenciarColetaComponent, canActivate: [AuthGuard] },
  { path: 'nova', component: NovaColetaComponent, canActivate: [AuthGuard] },
  { path: 'nova/:id', component: NovaColetaComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ColetaRoutingModule { }
