import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-gerenciar-coleta',
  templateUrl: './gerenciar-coleta.component.html',
  styleUrls: ['./gerenciar-coleta.component.css']
})


export class GerenciarColetaComponent implements OnInit {

  date1: Date;
  date2: Date;

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
      tipo: 'Endereco', descricao: 'Rua Agua Mineral', dataVencimento: '1',
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

  // MENU DA TABLE - GERENCIAR COLETA

  items: MenuItem[];

  status: string[] = ['Em digitação', 'Em andamento', 'Finalizada'];

  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.items = [{
      label: 'Opções',
      items: [{
        label: 'Editar',
        icon: 'pi pi-user-edit',
        command: () => {
          this.update();
        }
      },
      {
        label: 'Excluir',
        icon: 'pi pi-times',
        command: () => {
          this.delete();
        }
      }
      ]
    },
    {
      label: 'Coleta',
      items: [{
        label: 'Criar Coleta',
        icon: 'pi pi-check',
        url: 'http://angular.io'
      },
      {
        label: 'Gerar Percurso',
        icon: 'pi pi-map-marker',

      },

      {

        label: 'Visualizar Percurso',
        icon: 'pi pi-eye'
      }
      ]
    }
    ];
  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
  }
}


