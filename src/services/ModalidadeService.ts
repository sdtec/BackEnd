import { ModalidadeRequest } from "../models/interfaces/ModalidadeRequest";
import prismaClient from "../prisma";

class CreateModalidadeService {
  async execute({ nome, ativo }: ModalidadeRequest) {
    const modalidade = await prismaClient.modalidade.create({
      data: {
        nome,
        ativo,
      },
    });
    return modalidade;
  }
}

class EditModalidadeService {
  async execute({ id, nome, ativo }: ModalidadeRequest) {
    const modalidadeExists = await prismaClient.modalidade.findFirst({
      where: {
        id: id,
        ativo: true,
      },
    });
    if (!modalidadeExists) {
      throw new Error("Erro ao localizar a modalidade!");
    }
    const EditModalidade = await prismaClient.modalidade.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return EditModalidade;
  }
}

class GetEditModalidadeService {
  async execute(modalidade_id: string) {
    const modalidade = await prismaClient.modalidade.findUnique({
      where: {
        id: modalidade_id,
      },
      select: {
        id: true,
        nome: true,
        ativo: true,
      },
    });
    return modalidade;
  }
}

class ListModalidadeService {
  async execute() {
    const modalidade = await prismaClient.modalidade.findMany({
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
    return modalidade;
  }
}

export {
  CreateModalidadeService,
  EditModalidadeService,
  GetEditModalidadeService,
  ListModalidadeService,
};
