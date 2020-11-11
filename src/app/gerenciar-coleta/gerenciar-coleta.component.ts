import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {Message} from 'primeng/api';


@Component({
  selector: 'app-gerenciar-coleta',
  templateUrl: './gerenciar-coleta.component.html',
  styleUrls: ['./gerenciar-coleta.component.css'],

  providers: [ConfirmationService]
  
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


msgs: Message[] = [];

  confirm2() {
    this.confirmationService.confirm({
        message: 'Deseja realmente excluir essa coleta?',
        header: 'Confirmação de exclusão',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Sim', detail:'Record deleted'}];
            this.messageService.add({severity:'info', summary:'Confirmado', detail:'Coleta excluida'});
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Não', detail:'You have rejected'}];
            this.messageService.add({severity:'info', summary:'Rejeitado', detail:'Operação cancelada'});
        }
    });
    
}

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
    
}

showError() {
  this.messageService.add({severity:'error', summary: 'Mensagem!', detail: 'Excluido com sucesso',

});
}

  items: MenuItem[];

  status: string[] = ['Em digitação', 'Em andamento', 'Finalizada'];

  constructor(
    private messageService: MessageService, 
    private primengConfig: PrimeNGConfig,
    private title: Title,
    private confirmationService: ConfirmationService
    ) { }



  ngOnInit(): void {
    this.title.setTitle('Gerenciar Coletas')

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


