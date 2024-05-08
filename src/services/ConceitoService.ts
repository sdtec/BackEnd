import { ConceitoRequest } from "../models/interfaces/ConceitoRequest";
import prismaClient from "../prisma";

class EditConceitoService {
  async execute({
    id,
    aluno_id,
    frequencia1Bimestre,
    frequencia2Bimestre,
    frequencia3Bimestre,
    frequencia4Bimestre,
    matricula_id,
    observacao,
    turma_id,
  }: ConceitoRequest) {
    const conceitoExists = await prismaClient.conceito.findFirst({
      where: {
        id: id,
      },
    });

    if (!conceitoExists) {
      throw new Error("Conceito não encontrado!");
    }

    const conceitoEdited = await prismaClient.conceito.update({
      where: {
        id: id,
      },
      data: {
        aluno_id: aluno_id,
        frequencia1Bimestre: frequencia1Bimestre,
        frequencia2Bimestre: frequencia2Bimestre,
        frequencia3Bimestre: frequencia3Bimestre,
        frequencia4Bimestre: frequencia4Bimestre,
        matricula_id: matricula_id,
        observacao: observacao,
        turma_id: turma_id,
        updated_at: new Date().toISOString(),
      },
    });
    return conceitoEdited;
  }
}

class GetEditConceitoService {
  async execute(matriculaId: string) {
    const conceito = await prismaClient.conceito.findMany({
      where: {      
       matricula_id: matriculaId
      },
      select: {
        id: true,
        aluno_id: true,
        frequencia1Bimestre: true,
        frequencia2Bimestre: true,
        frequencia3Bimestre: true,
        frequencia4Bimestre: true,
        matricula_id: true,
        turma_id: true,
        observacao: true,
        Aluno: true,
        Turma: true,
      },
    });
    return conceito;
  }
  catch(error) {
    console.error("Error fetching conceito:", error);
    throw new Error("Failed to fetch conceito");
  }
}


export {
  EditConceitoService,
  GetEditConceitoService,
};
