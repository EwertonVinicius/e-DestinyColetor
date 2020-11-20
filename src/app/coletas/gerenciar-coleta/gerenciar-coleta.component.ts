import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, LazyLoadEvent, MenuItem, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ColetaFilter } from 'src/app/core/model';
import { AuthService } from 'src/app/seguranca/auth.service';
import { ColetaService } from '../coleta.service';


@Component({
  selector: 'app-gerenciar-coleta',
  templateUrl: './gerenciar-coleta.component.html',
  styleUrls: ['./gerenciar-coleta.component.css'],
})
export class GerenciarColetaComponent implements OnInit {
  coletas = [];
  filter = new ColetaFilter();
  totalRegistros = 0;
  @ViewChild('tabela') grid: { first: number; };

  status: string[] = ['Em digitação', 'Em andamento', 'Finalizada'];

  constructor(
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private title: Title,
    private coletaService: ColetaService,
    private confirmation: ConfirmationService,
    private auth: AuthService,
  ) { }


  ngOnInit(): void {
    this.filter.coletorId = this.auth.jwtPayload.empresaId;
    this.title.setTitle('Gerenciar Coletas');
  }

  pesquisar(pagina = 0): void {
    this.filter.pagina = pagina;

    this.coletaService.pesquisar(this.filter)
      .then(resultado => {
        this.coletas = resultado.coletas;
        this.totalRegistros = resultado.total;

        if (this.totalRegistros === 0) {
          this.messageService.add({ severity: 'info', summary: 'Nenhuma ocorrência encontrada.' });
        }
      }).catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent): void {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  limparFiltro(): void {
    this.filter = new ColetaFilter();
    this.filter.coletorId = this.auth.jwtPayload.empresaId;
    this.pesquisar();
  }

  confirmarExclusao(coleta: any): void {
    this.confirmation.confirm({
      message: 'Você deseja excluir este registro?',
      accept: () => {
        this.excluir(coleta);
      },
    });
  }

  excluir(coleta: any): void {
    this.coletaService.excluir(coleta.id).then(() => {
      if (this.grid.first === 0) {
        this.pesquisar();
      } else {
        this.grid.first = 0;
      }

      this.messageService.add({ severity: 'success', summary: 'Coleta excluída com sucesso!' });
    }).catch(erro => this.errorHandler.handle(erro));
  }
}


