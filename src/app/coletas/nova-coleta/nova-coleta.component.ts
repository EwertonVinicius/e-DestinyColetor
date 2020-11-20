import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Coleta, SolicitacaoFilter } from 'src/app/core/model';
import { SolicitacaoService } from 'src/app/core/solicitacao.service';

@Component({
  selector: 'app-nova-coleta',
  templateUrl: './nova-coleta.component.html',
  styleUrls: ['./nova-coleta.component.css']
})
export class NovaColetaComponent implements OnInit {

  coleta = new Coleta();
  solicitacoes = [];
  filter = new SolicitacaoFilter();
  totalRegistros = 0;
  @ViewChild('tabela') grid: { first: number; };

  constructor(
    private messageService: MessageService,
    private solicitacaoService: SolicitacaoService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Nova coleta');
  }

  pesquisar(pagina = 0): void {
    this.filter.pagina = pagina;

    this.solicitacaoService.pesquisar(this.filter)
      .then(resultado => {
        this.solicitacoes = resultado.solicitacoes;
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


}
