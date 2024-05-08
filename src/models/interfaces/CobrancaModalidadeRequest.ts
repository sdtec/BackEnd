export interface CobrancaModalidadeRequest {
    id: string,
    modalidade_id: string,
    dataVencimento: Date,
    valor: number,
    ativo: boolean,
    quantidadeParcela: number
}