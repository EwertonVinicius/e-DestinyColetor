
import { Component, OnInit  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit   {

  items: SelectItem[];

  item: string;


  salvar(form: NgForm) {
    console.log(form);

    // form.reset();

    
  }

  constructor(
    private messageService: MessageService,
    private title: Title,
    private route: ActivatedRoute,
    private rota: Router
    
    ) {this.items = [];
      for (let i = 0; i < 10000; i++) {
          this.items.push({label: 'Item ' + i, value: 'Item ' + i}); }
      }

    showSuccess() {
      this.messageService.add({severity:'success',  detail: 'Usuário cadastrado com sucesso'});
      this.rota.navigate(['/login']);
  }

  // summary: 'Gravando...',

  ngOnInit() {
    this.title.setTitle('Novo Coletor');
    console.log(this.route.snapshot.params['codigo'])
  }

}
