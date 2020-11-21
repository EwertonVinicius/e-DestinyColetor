import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coletor } from './model';

@Injectable({
  providedIn: 'root'
})
export class ColetorService {

  url = 'http://localhost:8080/coletor';

  constructor(
    private http: HttpClient
  ) { }

  adicionar(coletor: Coletor): Promise<Coletor> {
    return this.http.post<Coletor>(`${this.url}/novoColetor`, coletor).toPromise();
  }

  buscaPorId(id: number): Promise<Coletor> {
    return this.http.get<Coletor>(`${this.url}/${id}`).toPromise();
  }
}
