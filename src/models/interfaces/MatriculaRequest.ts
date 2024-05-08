export interface MatriculaRequest {
  id: string;
  aluno_id: string;
  tipoContrato_id: string;
  turma_id: string;
  situacao_id: string;
  observacao: string;
  anoLetivo: number;
  responsavel_id: string;
  dataMatricula: Date;
}
