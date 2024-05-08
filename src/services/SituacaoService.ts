import { SituacaoRequest } from "../models/interfaces/SituacaoRequest";
import prismaClient from "../prisma";

class CreateSituacaoService {
  async execute({ nome, ativo }: SituacaoRequest) {
    const situacao = await prismaClient.situacao.create({
      data: {
        nome: nome,
        ativo: ativo,
      },
    });
    return situacao;
  }
}

class EditSituacaoService {
  async execute({ nome, ativo, id }: SituacaoRequest) {
    const situacaoExists = await prismaClient.situacao.findFirst({
      where: {
        id: id,
        ativo: true,
      },
    });

    if (!situacaoExists) {
      throw new Error("Situação não encontrada!");
    }

    const Editedsituacao = await prismaClient.situacao.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return Editedsituacao;
  }
}

class GetEditSituacaoService {
  async execute(situacao_id: string) {
    const situacao = await prismaClient.situacao.findUnique({
      where: {
        id: situacao_id,
      },
      select: {
        id: true,
        nome: true,
        ativo: true,
      },
    });
    return situacao;
  }
  catch(error) {
    console.error("Error fetching situação:", error);
    throw new Error("Failed to fetch situação");
  }
}

class ListSituacaoService {
  async execute() {
    const situacao = await prismaClient.situacao.findMany({
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
    return situacao;
  }
}

export {
  CreateSituacaoService,
  EditSituacaoService,
  GetEditSituacaoService,
  ListSituacaoService,
};