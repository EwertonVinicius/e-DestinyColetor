import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { ColetorService } from 'src/app/core/coletor.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Coleta, Solicitacao, SolicitacaoFilter } from 'src/app/core/model';
import { SolicitacaoService } from 'src/app/core/solicitacao.service';
import { AuthService } from 'src/app/seguranca/auth.service';
import { ColetaService } from '../coleta.service';

import * as moment from 'moment';

@Component({
  selector: 'app-nova-coleta',
  templateUrl: './nova-coleta.component.html',
  styleUrls: ['./nova-coleta.component.css']
})
export class NovaColetaComponent implements OnInit {

  coleta = new Coleta();
  solicitacoes = [];
  solicitacoesSelecionadas: Solicitacao[] = [];
  filter = new SolicitacaoFilter();
  totalRegistros = 0;
  @ViewChild('tabela') grid: { first: number; };

  constructor(
    private messageService: MessageService,
    private solicitacaoService: SolicitacaoService,
    private coletaService: ColetaService,
    private coletorService: ColetorService,
    private errorHandler: ErrorHandlerService,
    private auth: AuthService,
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Nova coleta');

    const idColeta = this.route.snapshot.params.id;

    if (idColeta) {
      this.filter.idColeta = idColeta;
      this.carregarColeta(idColeta);
      this.atualizarTituloEdicao();
    } else {
      this.coletorService.buscaPorId(this.auth.jwtPayload.empresaId)
        .then(coletor => this.coleta.coletor = coletor)
        .catch(erro => this.errorHandler.handle(erro));
      this.pesquisar();
    }
  }

  disabledCheckbox(): boolean {
    return this.coleta.situacao !== 'EM_DIGITACAO';
  }

  carregarColeta(id: any): void {
    this.coletaService.buscaPorId(id)
      .then(coleta => {
        this.coleta = coleta;

        this.coleta.dtPrevistaColeta = moment(this.coleta.dtPrevistaColeta, 'YYYY-MM-DD').toDate();
        this.solicitacoesSelecionadas = coleta.solicitacoes;
        this.pesquisar();
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarTituloEdicao(): void {
    this.title.setTitle(`Edição de coleta`);
  }

  get editando(): boolean {
    return this.coleta.id !== undefined;
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

  salvar(form: NgForm): void {
    this.coleta.solicitacoes = this.solicitacoesSelecionadas;

    if (this.editando) {
      this.atualizarColeta(form);
    } else {
      this.adicionarColeta(form);
    }
  }

  adicionarColeta(form: NgForm): void {
    this.coletaService.adicionar(this.coleta)
      .then(() => {
        this.messageService.add(
          {
            severity: 'success',
            summary: 'Coleta adicionada com sucesso!'
          });

        this.router.navigate(['/gerenciar']);
      })
      .catch(error => this.errorHandler.handle(error));
  }

  atualizarColeta(form: NgForm): void {
    this.coletaService.atualizar(this.coleta)
      .then(
        coleta => {
          this.coleta = coleta;
          this.messageService.add(
            {
              severity: 'success',
              summary: 'Coleta alterada com sucesso!'
            });
        }
      ).catch(erro => this.errorHandler.handle(erro));
  }

}
