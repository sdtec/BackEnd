import { DesenvolvimentoConceitoRequest } from "../models/interfaces/DesenvolvimentoConceitoRequest";
import prismaClient from "../prisma";

class CreateDesenvolvimentoConceitoService {
  async execute({
    nome,
    desenvolvimentoAluno_id,
  }: DesenvolvimentoConceitoRequest) {
    const desenvolvimentoConceito =
      await prismaClient.desenvolvimentoConceito.create({
        data: {
          nome: nome,
          desenvolvimentoAluno_id: desenvolvimentoAluno_id,
        },
      });
    return desenvolvimentoConceito;
  }
}

class EditDesenvolvimentoConceitoService {
  async execute({
    nome,
    desenvolvimentoAluno_id,
    id,
  }: DesenvolvimentoConceitoRequest) {
    const desenvolvimentoConceitoExists =
      await prismaClient.desenvolvimentoConceito.findFirst({
        where: {
          id: id,
        },
      });

    if (!desenvolvimentoConceitoExists) {
      throw new Error("Desenvolvimento Conceito não encontrada!");
    }

    const desenvolvimentoConceitoEdited =
      await prismaClient.desenvolvimentoConceito.update({
        where: {
          id: id,
        },
        data: {
          DesenvolvimentoAluno: {
            connect: { id: desenvolvimentoAluno_id },
          },
          nome: nome,
          updated_at: new Date().toISOString(),
        },
      });
    return desenvolvimentoConceitoEdited;
  }
}

class GetEditDesenvolvimentoConceitoService {
  async execute(desenvolvimentoConceito_id: string) {
    const desenvolvimentoConceito =
      await prismaClient.desenvolvimentoConceito.findUnique({
        where: {
          id: desenvolvimentoConceito_id,
        },
      });
    return desenvolvimentoConceito;
  }
  catch(error) {
    console.error("Error fetching desenvolvimento Conceito:", error);
    throw new Error("Failed to fetch desenvolvimento Conceito");
  }
}

class ListDesenvolvimentoConceitoService {
  async execute(desenvolvimentoAluno_id: string) {
    const desenvolvimentoConceito =
      await prismaClient.desenvolvimentoConceito.findMany({
        where: {
          desenvolvimentoAluno_id: desenvolvimentoAluno_id,
        },
        select: {
          id: true,
          desenvolvimentoAluno_id: true,
          nome: true,
        },
        orderBy: {
          created_at: "desc",
        },
      });
    return desenvolvimentoConceito;
  }
}

export {
  CreateDesenvolvimentoConceitoService,
  EditDesenvolvimentoConceitoService,
  GetEditDesenvolvimentoConceitoService,
  ListDesenvolvimentoConceitoService,
};
