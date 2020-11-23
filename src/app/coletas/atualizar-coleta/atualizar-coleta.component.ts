import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Coleta, SolicitacaoFilter } from 'src/app/core/model';
import { SolicitacaoService } from 'src/app/core/solicitacao.service';
import { AuthService } from 'src/app/seguranca/auth.service';
import { ColetaService } from '../coleta.service';

@Component({
  selector: 'app-atualizar-coleta',
  templateUrl: './atualizar-coleta.component.html',
  styleUrls: ['./atualizar-coleta.component.css']
})
export class AtualizarColetaComponent implements OnInit {

  coleta = new Coleta();
  solicitacoes = [];
  filter = new SolicitacaoFilter();
  totalRegistros = 0;
  @ViewChild('tabela') grid: { first: number; };

  display = false;

  constructor(
    private messageService: MessageService,
    private solicitacaoService: SolicitacaoService,
    private coletaService: ColetaService,
    private errorHandler: ErrorHandlerService,
    private auth: AuthService,
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private confirmation: ConfirmationService,
  ) { }

  idColeta: number;

  ngOnInit(): void {
    this.idColeta = this.route.snapshot.params.id;
    this.pesquisar();
    this.carregarColeta();
  }

  pesquisar(): void {
    this.solicitacaoService.findAllByColeta(this.idColeta)
      .then(resultado => this.solicitacoes = resultado)
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarColeta(): void {
    this.coletaService.buscaPorId(this.idColeta)
      .then(coleta => {
        this.coleta = coleta;
      }).catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: NgForm): void {
    this.coletaService.finalizar(this.coleta)
      .then(
        coleta => {
          this.coleta = coleta;
          this.messageService.add(
            {
              severity: 'success',
              summary: 'Coleta alterada com sucesso!'
            });
          this.router.navigate(['/gerenciar']);
        }
      ).catch(erro => this.errorHandler.handle(erro));
  }

  disabledConfirmar(situacao: string): boolean {
    return situacao === 'COLETADA' || situacao === 'FINALIZADA';
  }

  confirmaRecebimento(solicitacao: any): void {
    this.solicitacaoService.atualizarPropriedadeSituacao(solicitacao.id, 'COLETADA').then(() => {
      solicitacao.situacao = 'COLETADA';
      this.pesquisar();
      this.messageService.add(
        {
          severity: 'info',
          summary: 'Solicitação coletada.'
        });
    }).catch(erro => this.errorHandler.handle(erro));
  }

  showDialog(): void {
    this.display = true;
  }

  cancelarRecebimento(solicitacao: any): void {
    this.solicitacaoService.atualizarPropriedadeSituacao(solicitacao.id, 'FINALIZADA').then(() => {
      solicitacao.situacao = 'FINALIZADA';
      this.messageService.add(
        {
          severity: 'info',
          summary: 'Solicitação finalizada.'
        });
    }).catch(erro => this.errorHandler.handle(erro));
  }

  obterQuantidadeColeta(solicitacao: any): number {
    let total = 0;
    solicitacao.residuos.forEach(item => {
      total = total + item.quantidade;
    });

    return total;
  }

}
