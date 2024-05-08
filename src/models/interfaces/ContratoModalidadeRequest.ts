export interface ContratoModalidadeRequest {
    id: string,
    observacao: string,
    quantidadeParcela: number
    dataVencimento: Date
    turmaModalidade_id: string
    aluno_id: string,
    matricula_Modalidade_id: string
}