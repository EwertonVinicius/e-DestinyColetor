import { ClassGetter } from "@angular/compiler/src/output/output_ast";

export class Endereco {
  id: number;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

export class Coletor {
  id: number;
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  inscricaoEstadual: string;
  email: string;
  senha: string;
  telefone: string;
  endereco = new Endereco();
}
