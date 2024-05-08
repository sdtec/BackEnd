export interface TurmaRequest {
  id: string;
  nome: string;
  numeroCapacidade: number;
  valorMeioPeriodo: number;
  valorIntegral: number;
  valorSemiIntegral: number;
  anoCalendario: number;
  valorMensalidade: number;
  horarioInicial: string;
  horarioFinal: string;
  ordem: number;
  turno_id: string;
  sala_id: string;
  serie_id: string;
  ativo: boolean;
}
