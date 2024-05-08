export interface ContratoParcelaRequest {
  id: string;
  contrato_id: string;
  formaPagamento_id: string;
  numeroParcela: number;
  dataVencimento: Date;
  observacao: string;
  valorDesconto: number;
  total: number;
  dataBaixaPagamento: Date;
  juros: number;
  multa: number;
  valorPagamento: number;
  dataPagamento: Date;
  usuario_id: string;
  ativo: boolean;
  valorCobrado: number;
}
