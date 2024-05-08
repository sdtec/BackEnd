import prismaClient from "../prisma";
import { DesenvolvimentoAlunoRequest } from "../models/interfaces/DesenvolvimentoAlunoRequest";

class CreateDesenvolvimentoAlunoService {
  async execute({ nome, ativo }: DesenvolvimentoAlunoRequest) {
    const desenvolvimentoAluno = await prismaClient.desenvolvimentoAluno.create(
      {
        data: {
          nome,
          ativo,
        },
      }
    );
    return desenvolvimentoAluno;
  }
}
class GetEditDesenvolvimentoAlunoService {
  async execute(desenvolvimentoAluno_id: string) {
    const desenvolvimentoAluno =
      await prismaClient.desenvolvimentoAluno.findUnique({
        where: {
          id: desenvolvimentoAluno_id,
        },
      });
    return desenvolvimentoAluno;
  }
}
class EditDesenvolvimentoAlunoService {
  async execute({ id, nome, ativo }: DesenvolvimentoAlunoRequest) {
    const desenvolvimentoExists =
      await prismaClient.desenvolvimentoAluno.findFirst({
        where: {
          id: id,
        },
      });
    if (!desenvolvimentoExists) {
      throw new Error("Error ao localizar desenvolvimento do aluno!");
    }
    const EditDesenvolvimento = await prismaClient.desenvolvimentoAluno.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return EditDesenvolvimento;
  }
}

class ListDesenvolvimentoAlunoService {
  async execute() {
    const desenvolvimento = prismaClient.desenvolvimentoAluno.findMany({
      where: {
        ativo: true,
      },
      select: {
        id: true,
        nome: true,
        ativo: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return desenvolvimento;
  }
}
export {
  CreateDesenvolvimentoAlunoService,
  GetEditDesenvolvimentoAlunoService,
  EditDesenvolvimentoAlunoService,
  ListDesenvolvimentoAlunoService,
};
