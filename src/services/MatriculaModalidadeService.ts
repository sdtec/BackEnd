import { MatriculaModalidadeRequest } from "../models/interfaces/MatriculaModalidadeRequest";
import prismaClient from "../prisma";

class CreateMatriculaModalidadeService {
  async execute({
    aluno_id,
    dataMatricula,
    dataVencimento,
    desconto_id,
    observacao,
    quantidadeParcela,
    responsavel_id,
    situacao_id,
    turmaModalidade_id,
  }: MatriculaModalidadeRequest) {
    const matriculaModalidade = await prismaClient.matriculaModalidade.create({
      data: {
        aluno_id: aluno_id,
        dataMatricula: new Date().toISOString(),
        dataVencimento: dataVencimento,
        desconto_id: desconto_id,
        observacao: observacao,
        quantidadeParcela: quantidadeParcela,
        responsavel_id: responsavel_id,
        situacao_id: situacao_id,
        turmaModalidade_id: turmaModalidade_id,
      },
    });
    return matriculaModalidade;
  }
}

class EditMatriculaModalidadeService {
  async execute({
    id,
    aluno_id,
    dataMatricula,
    dataVencimento,
    desconto_id,
    observacao,
    quantidadeParcela,
    responsavel_id,
    situacao_id,
    turmaModalidade_id,
  }: MatriculaModalidadeRequest) {
    const matriculaModalidadeExists =
      await prismaClient.matriculaModalidade.findFirst({
        where: {
          id: id,
        },
      });

    if (!matriculaModalidadeExists) {
      throw new Error("Matrícula da modalidade não encontrada!");
    }

    const matriculaModalidadeEdited =
      await prismaClient.matriculaModalidade.update({
        where: {
          id: id,
        },
        data: {
          aluno_id: aluno_id,
          dataMatricula: dataMatricula,
          dataVencimento: dataVencimento,
          desconto_id: desconto_id,
          observacao: observacao,
          quantidadeParcela: quantidadeParcela,
          responsavel_id: responsavel_id,
          situacao_id: situacao_id,
          turmaModalidade_id: turmaModalidade_id,
          updated_at: new Date().toISOString(),
        },
      });
    return matriculaModalidadeEdited;
  }
}

class GetEditMatriculaModalidadeService {
  async execute(matriculaModalidade_id: string) {
    const matriculaModalidade = await prismaClient.matriculaModalidade.findUnique(
      {
        where: {
          id: matriculaModalidade_id,
        },
        select: {
          id: true,
          aluno_id: true,
          dataMatricula: true,
          dataVencimento: true,
          desconto_id: true,
          observacao: true,
          quantidadeParcela: true,
          responsavel_id: true,
          situacao_id: true,
          turmaModalidade_id: true,
          TurmaModalidade: true,
        },
      }
    );
    return matriculaModalidade;
  }
  catch(error) {
    console.error("Error fetching turma da modalidade:", error);
    throw new Error("Failed to fetch turma da modalidade");
  }
}

class ListMatriculaModalidadeService {
  async execute() {
    const matriculaModalidade = await prismaClient.matriculaModalidade.findMany(
      {
        select: {
          id: true,
          aluno_id: true,
          dataMatricula: true,
          dataVencimento: true,
          desconto_id: true,
          observacao: true,
          quantidadeParcela: true,
          responsavel_id: true,
          situacao_id: true,
          turmaModalidade_id: true,
          Aluno: true,
          TurmaModalidade: {
            select: {
              Modalidade: true,
              nome: true
            }
          }
        },
        orderBy: {
          created_at: "desc",
        },
      }
    );
    return matriculaModalidade;
  }
}

export {
  CreateMatriculaModalidadeService,
  EditMatriculaModalidadeService,
  GetEditMatriculaModalidadeService,
  ListMatriculaModalidadeService,
};
