import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SolicitacaoFilter } from 'src/app/core/model';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  url = 'http://localhost:8080/solicitacao';

  constructor(private http: HttpClient) { }

  pesquisar(filter: SolicitacaoFilter): Promise<any> {
    let params = new HttpParams();

    params = params.set('page', filter.pagina.toString());
    params = params.set('size', filter.itensPorPagina.toString());

    return this.http.get(`${this.url}?resumo`, { params })
      .toPromise()
      .then(response => {
        // tslint:disable-next-line: no-string-literal
        const solicitacoes = response['content'];
        const resultado = {
          solicitacoes,
          // tslint:disable-next-line: no-string-literal
          total: response['totalElements']
        };
        return resultado;
      });
  }

}
