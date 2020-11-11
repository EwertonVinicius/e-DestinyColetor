import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { NotAuthenticatedError } from './money-http-interceptor';


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private messageService: MessageService,
    private router: Router
    ) { }
  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;

    }else if (errorResponse instanceof NotAuthenticatedError){
      msg = 'Sua sessão expirou!' ;
      this.router.navigate(['/login']);
      this.expirou();

    } else if (errorResponse instanceof HttpErrorResponse
        && errorResponse.status >= 400 && errorResponse.status <= 499) {
      msg = 'Ocorreu um erro ao processar a sua solicitação';
      this.soli();

      if (errorResponse.status === 403) {
        msg = 'Você não tem permissão para executar esta ação';
        this.perm();
      }

      try {
        msg = errorResponse.error[0].mensagemUsuario;
      } catch (e) { }

      console.error('Ocorreu um erro', errorResponse);

    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro', errorResponse);
      this.servico();
    }

    this.messageService.add({ severity:'error', detail: msg });
  }

  expirou() {
    this.messageService.add({severity:'error', summary: 'Atenção!', detail: 'Sua sesão expirou'});
}
servico() {
  this.messageService.add({severity:'error', summary: 'Atenção!', detail: 'Erro ao processar serviço remoto. Tente novamente.'});
}

perm() {
  this.messageService.add({severity:'error', summary: 'Atenção!', detail: 'Você não tem permissão para executar esta ação'});
}
soli() {
  this.messageService.add({severity:'error', summary: 'Atenção!', detail: 'Ocorreu um erro ao processar a sua solicitação'});

  }

}
