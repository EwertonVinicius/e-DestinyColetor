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

export class Solicitacao {
  id: number;
  residuos: Residuo[] = [];
  dtSolicitacao: Date;
  coleta: Coleta;
}

export class Residuo {
  id: number;
  descricao: string;
  quantidade: number;
  solicitacao: Solicitacao;
}

export class Coleta {
  id: number;
  coletor: Coletor;
  dtPrevistaColeta: Date;
  solicitacoes: Solicitacao[] = [];
}

export class ColetaFilter {
  coletorId: number;
  dataInicio: Date;
  dataFim: Date;
  situacao: string[];
  pagina = 0;
  itensPorPagina = 5;
}

export class SolicitacaoFilter {
  idColeta: number;
  pagina = 0;
  itensPorPagina = 5;
}
