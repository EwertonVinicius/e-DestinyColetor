import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from './auth.service';
import { ErrorHandlerService } from './error-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showError() {
    this.messageService.add({severity:'error', summary: 'Atenção!', detail: 'Usuário ou senha inválido'});
}

  login(usuario: string, senha: string){
    
    this.auth.login(usuario, senha)
      .then(() => {
        this.router.navigate(['/nova']);
      })
      .catch(erro => {
        console.log('usuário ou senha inválido!');
         this.errorHandler.handle(erro);
         this.showError();
      });
  }

  

  constructor(private auth: AuthService,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private title: Title ) { }

  ngOnInit(): void {
    this.title.setTitle('e-Destiny')
  }

}
