
import { Component, OnInit  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit   {

  salvar(form: NgForm) {
    console.log(form);

    // form.reset();
  }

  constructor(
    private messageService: MessageService,
    private title: Title ) { }

    showSuccess() {
      this.messageService.add({severity:'success', summary: 'Gravando...', detail: 'Usuário cadastrado com sucesso'});
  }

  ngOnInit() {
    this.title.setTitle('Novo Cadastro');
  }

}
