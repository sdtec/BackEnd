export interface CobrancaEscolarRequest {
  id: string;
  nivelSerie_id: string;
  valorSemiIntegral: number;
  valorIntegral: number;
  valorMeioPeriodo: number;
  dataVencimento: Date;
  ativo: boolean;
  quantidadeParcela: number;
}
