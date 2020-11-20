import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../seguranca/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private messageService: MessageService,
    private title: Title
  ) { }

  login(usuario: string, senha: string): void {

    this.auth.login(usuario, senha)
      .then(() => {
        this.router.navigate(['/nova']);
      })
      .catch(erro => {
        this.messageService.add({ severity: 'error', summary: 'Atenção!', detail: 'Usuário ou senha inválido' });
      });
  }

  ngOnInit(): void {
    this.title.setTitle('e-Destiny');
  }

}
