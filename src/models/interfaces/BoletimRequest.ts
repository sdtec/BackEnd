export interface BoletimRequest {
    id: string,
    aluno_id: string,
    turma_id: string,
    matricula_id: string
    fechado: boolean,
    ano: number
}