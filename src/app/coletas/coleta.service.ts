import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coleta, ColetaFilter } from 'src/app/core/model';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ColetaService {

  url = 'http://localhost:8080/coleta';

  constructor(private http: HttpClient) { }

  pesquisar(filter: ColetaFilter): Promise<any> {
    let params = new HttpParams();

    params = params.set('page', filter.pagina.toString());
    params = params.set('size', filter.itensPorPagina.toString());

    if (filter.coletorId) {
      params = params.set('coletorId', filter.coletorId.toString());
    }

    if (filter.situacao) {
      params = params.set('situacoes', filter.situacao.toString());
    }

    if (filter.dataInicio) {
      params = params.set('dataInicio', moment(filter.dataInicio).format('YYYY-MM-DD'));
    }

    if (filter.dataFim) {
      params = params.set('dataFim', moment(filter.dataFim).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.url}?resumo`, { params })
      .toPromise()
      .then(response => {
        // tslint:disable-next-line: no-string-literal
        const coletas = response['content'];
        const resultado = {
          coletas,
          // tslint:disable-next-line: no-string-literal
          total: response['totalElements']
        };
        return resultado;
      });
  }

  excluir(id: number): Promise<any> {
    return this.http.delete(`${this.url}/${id}`).toPromise().then(() => null);
  }


  adicionar(coleta: Coleta): Promise<Coleta> {
    return this.http.post<Coleta>(`${this.url}`, coleta).toPromise();
  }

  atualizar(coleta: Coleta): Promise<Coleta> {
    return this.http.put<Coleta>(`${this.url}/${coleta.id}`, coleta).toPromise();
  }

  buscaPorId(id: number): Promise<Coleta> {
    return this.http.get<Coleta>(`${this.url}/${id}`).toPromise();
  }

  gerarPercurso(id: number): Promise<any> {
    return this.http.get(`${this.url}/gerarPercurso/${id}`).toPromise().then(() => null);
  }
}
