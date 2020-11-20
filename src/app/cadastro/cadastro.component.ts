
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ColetorService } from '../core/coletor.service';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Coletor } from '../core/model';
import { ViaCepService } from '../core/via-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  coletor = new Coletor();
  confirmarSenha: string;
  senhaDiferente = true;

  constructor(
    private messageService: MessageService,
    private coletorService: ColetorService,
    private viaCepService: ViaCepService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Novo Coletor');
  }

  salvar(form: NgForm): void {
    this.coletor.cnpj = this.removerCaracterEspecial(this.coletor.cnpj);
    this.coletor.endereco.cep = this.removerCaracterEspecial(this.coletor.endereco.cep);

    if (this.coletor.inscricaoEstadual) {
      this.coletor.inscricaoEstadual = this.removerCaracterEspecial(this.coletor.inscricaoEstadual);
    }

    this.coletorService.adicionar(this.coletor)
      .then(response => {
        this.messageService.add({ severity: 'success', summary: 'Conta criada com sucesso!' });
        this.coletor = response;
        this.router.navigate(['/login']);
      }).catch(erro => this.errorHandler.handle(erro));
  }

  carregarEnderecoViaCep(event: any): void {
    this.coletor.endereco.cep = this.removerCaracterEspecial(this.coletor.endereco.cep);

    this.viaCepService.consultaEnderecoViaCep(this.coletor.endereco.cep)
      .then(response => {
        this.coletor.endereco.logradouro = response.logradouro;
        this.coletor.endereco.complemento = response.complemento;
        this.coletor.endereco.bairro = response.bairro;
        this.coletor.endereco.cidade = response.localidade;
        this.coletor.endereco.estado = response.uf;
      }).catch(
        erro => {
          this.errorHandler.handle(erro);
          window.stop();
        }
      );
  }

  validaConfirmaSenha(event: KeyboardEvent): void {
    if (this.confirmarSenha) {
      this.senhaDiferente = this.coletor.senha.localeCompare(this.confirmarSenha) !== 0;
    } else {
      this.senhaDiferente = false;
    }
  }

  private removerCaracterEspecial(texto: string): string {
    texto = texto.split('.').join('');
    texto = texto.split('/').join('');
    texto = texto.split('-').join('');
    texto = texto.split('_').join('');
    texto = texto.split('(').join('');
    texto = texto.split(')').join('');
    return texto;
  }

}
