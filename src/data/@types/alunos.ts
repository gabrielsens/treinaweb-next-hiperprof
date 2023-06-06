export interface AlunoInterface {
  nome: string;
  email: string;
  data_aula: string | Date;
  id?: string;
}

export interface AlunoErrorResponse extends AlunoInterface {
}
