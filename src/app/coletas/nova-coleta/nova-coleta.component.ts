import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-nova-coleta',
  templateUrl: './nova-coleta.component.html',
  styleUrls: ['./nova-coleta.component.css']
})
export class NovaColetaComponent implements OnInit {

  lancamentos = [
    {
      tipo: 'Endereco', descricao: 'Rua Rio Japurá, 415 Bl 02 Ap 43', dataVencimento: '3',
      dataPagamento: '28/10/2020', valor: 'Aberto', pessoa: 'Ewerton'
    },
    {
      tipo: 'Endereco', descricao: 'Rua Rio Jaguaribe, 489 Bl 4A Ap 11', dataVencimento: '5',
      dataPagamento: '01/11/2020', valor: 'Fechado', pessoa: 'Eugenio'
    },
    {
      tipo: 'Endereco', descricao: 'Rua Agua Mineral, 500', dataVencimento: '1',
      dataPagamento: '15/11/2020', valor: 'Aberto', pessoa: 'Gustavo'
    },
    {
      tipo: 'Endereco', descricao: 'Rua Lago tingui, 810 Casa 02', dataVencimento: '2',
      dataPagamento: '30/10/2020', valor: 'Aberto', pessoa: 'Pedro'
    },

    {
      tipo: 'Endereco', descricao: 'Rua Lago tingui, 810 Casa 02', dataVencimento: '2',
      dataPagamento: '30/10/2020', valor: 'Aberto', pessoa: 'Pedro'
    },
  ];

  constructor(
    private messageService: MessageService,
    private title: Title,
    private router: Router
  ) { }

  showSuccess(): void {
    this.messageService.add({ severity: 'success', detail: 'Coletas gravadas com sucesso' });
    // summary: 'Gravando...',
    this.router.navigate(['\gerenciar']);
  }

  ngOnInit(): void {
    this.title.setTitle('Coletas');
  }


}
