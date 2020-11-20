import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { GerenciarColetaComponent } from './coletas/gerenciar-coleta/gerenciar-coleta.component';
import { NovaColetaComponent } from './coletas/nova-coleta/nova-coleta.component';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './seguranca/auth.guard';


const rotas: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', },

  { path: 'gerenciar', component: GerenciarColetaComponent, canActivate: [AuthGuard] },
  { path: 'nova', component: NovaColetaComponent, canActivate: [AuthGuard] },

  { path: 'novoColetor', component: CadastroComponent, },

  { path: 'login', component: LoginComponent },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
