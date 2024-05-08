export interface MatriculaModalidadeRequest {
  id: string;
  aluno_id: string;
  turmaModalidade_id: string;
  situacao_id: string;
  quantidadeParcela: number;
  observacao: string;
  dataVencimento: Date;
  dataMatricula: Date;
  desconto_id: string;
  responsavel_id: string;
}
