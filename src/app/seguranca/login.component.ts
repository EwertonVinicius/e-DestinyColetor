import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login(usuario: string, senha: string){
    
    this.auth.login(usuario, senha)
      .then(() => {
        this.router.navigate(['']);
      })
      .catch(erro => {
        console.log('usuário ou senha inválido!');
      });
  }

  

  constructor(private auth: AuthService,
    private router: Router ) { }

  ngOnInit(): void {
  }

}