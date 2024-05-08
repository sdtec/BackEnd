import { ContratoModalidadeRequest } from "../models/interfaces/ContratoModalidadeRequest";
import prismaClient from "../prisma";

class EditContratoModalidadeService {
  async execute({
    id,
    aluno_id,
    dataVencimento,
    matricula_Modalidade_id,
    observacao,
    quantidadeParcela,
    turmaModalidade_id,
  }: ContratoModalidadeRequest) {
    const contratoModalidadeExists =
      await prismaClient.contratoModalidade.findFirst({
        where: {
          id: id,
        },
      });

    if (!contratoModalidadeExists) {
      throw new Error("Contrato Modalidade não encontrada!");
    }

    const contratoModalidadeEdited =
      await prismaClient.contratoModalidade.update({
        where: {
          id: id,
        },
        data: {
          aluno_id: aluno_id,
          dataVencimento: dataVencimento,
          matriculaModalidade_id: matricula_Modalidade_id,
          observacao: observacao,
          quantidadeParcela: quantidadeParcela,
          turmaModalidade_id: turmaModalidade_id,
          updated_at: new Date().toISOString(),
        },
      });
    return contratoModalidadeEdited;
  }
}

class GetEditContratoModalidadeService {
  async execute(contratoModalidade_id: string) {
    const contratoModalidade = await prismaClient.contratoModalidade.findUnique({
      where: {
        id: contratoModalidade_id,
      },
      select: {
        aluno_id: true,
        dataVencimento: true,
        matriculaModalidade_id: true,
        observacao: true,
        turmaModalidade_id: true,
        quantidadeParcela: true,
      },
    });
    return contratoModalidade;
  }
  catch(error) {
    console.error("Error fetching contrato da Modalidade:", error);
    throw new Error("Failed to fetch contrato da Modalidade");
  }
}

class ListContratoModalidadeService {
  async execute() {
    const contratoModalidade = await prismaClient.contratoModalidade.findMany({
      select: {
        id: true,
        aluno_id: true,
        dataVencimento: true,
        matriculaModalidade_id: true,
        observacao: true,
        turmaModalidade_id: true,
        quantidadeParcela: true,
        Aluno: true,
        TurmaModalidade: true
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return contratoModalidade;
  }
}

export {

    EditContratoModalidadeService,
    GetEditContratoModalidadeService,
    ListContratoModalidadeService
};
