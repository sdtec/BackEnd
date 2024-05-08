export interface TurmaModalidadeRequest {
  id: string;
  nome: string;
  numeroCapacidade: number;
  valorMensalidade: number;
  anoCalendario: string;
  dataVencimentoParcela: Date;
  turno_id: string;
  modalidade_id: string;
  professor_id: string;
  ativo: boolean;
}
