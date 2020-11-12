import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { GerenciarColetaComponent } from './gerenciar-coleta/gerenciar-coleta.component';
import { ListaColetaComponent } from './lista-coleta/lista-coleta.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './seguranca/auth.guard';


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
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
