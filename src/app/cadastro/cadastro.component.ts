
import { Component, OnInit  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
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
    private title: Title,
    private route: ActivatedRoute ) { }

    showSuccess() {
      this.messageService.add({severity:'success',  detail: 'Usuário cadastrado com sucesso'});
  }

  // summary: 'Gravando...',

  ngOnInit() {
    this.title.setTitle('Novo Coletor');
    console.log(this.route.snapshot.params['codigo'])
  }

}
