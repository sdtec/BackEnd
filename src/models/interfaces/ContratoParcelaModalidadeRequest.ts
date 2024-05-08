export interface ContratoParcelaModalidadeRequest {
    id: string,
    contratoModalidade_id: string
    valorCobrado: number
    valorPagamento: number
    numeroParcela:number 
    dataPagamento: Date
    dataVencimento: Date
    valorDesconto: number,
    situacao_id: string,
    dataBaixaPagamento: Date
    formaPagamento_id: string
    juros: number
    multa: number,
    total: number
    observacao: string
}