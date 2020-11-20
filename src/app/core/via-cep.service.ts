import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  constructor(
    private http: HttpClient
  ) { }


  consultaEnderecoViaCep(cep: string): Promise<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`).toPromise();
  }
}
