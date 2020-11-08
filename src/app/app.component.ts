import { Component } from '@angular/core';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {



  visibleSidebar1;

  exibindoMenu = false;

  constructor(     private router: Router   ) {}

  mostrandoNavbar() {     return this.router.url !== '/login'}


  lancamentos = [
    { tipo: 'Endereco', descricao: 'Rua Rio Japurá', dataVencimento: '415',
      dataPagamento: 'Bl 2', valor: 999, pessoa: 'Ewerton' },
    { tipo: 'Endereco', descricao: 'Rua Rio Jaguaribe', dataVencimento: '489',
      dataPagamento: 'Bl 4A', valor: 999, pessoa: 'Giovanna' },
    { tipo: 'Endereco', descricao: 'Rua Agua Mineral', dataVencimento: '669',
      dataPagamento: '69', valor: 999, pessoa: 'Pedrao' },
    { tipo: 'Endereco', descricao: 'Rua lago tingui', dataVencimento: '810',
      dataPagamento: 'Casa 2', valor: 999, pessoa: 'Dagui' },
  ];

  items: MenuItem[];

    activeItem: MenuItem;


    ngOnInit() {
        this.items = [
            {label: 'Home', icon: 'pi pi-fw pi-home'}

        ];

        this.activeItem = this.items[0];
    }
}
