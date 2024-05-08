import { ConceitoAvaliacaoRequest } from "../models/interfaces/ConceitoAvaliacaoRequest";
import prismaClient from "../prisma";

class CreateConceitoAvaliacaoService {
  async execute({
    avaliacao1B_id,
    avaliacao2B_id,
    avaliacao3B_id,
    avaliacao4B_id,
    conceito_id,
    desenvolvimentoConceito_id,
    id,
  }: ConceitoAvaliacaoRequest) {
    const conceitoAvaliacao = await prismaClient.conceitoAvaliacao.create({
      data: {
        avaliacao1B_id: avaliacao1B_id,
        avaliacao2B_id: avaliacao2B_id,
        avaliacao3B_id: avaliacao3B_id,
        avaliacao4B_id: avaliacao4B_id,
        conceito_id: conceito_id,
        desenvolvimentoConceito_id: desenvolvimentoConceito_id,
      },
    });
    return conceitoAvaliacao;
  }
}

class EditConceitoAvaliacaoService {
  async execute(conceito: ConceitoAvaliacaoRequest) {
    const {
      id,
      avaliacao1B_id,
      avaliacao2B_id,
      avaliacao3B_id,
      avaliacao4B_id,
      conceito_id,
      desenvolvimentoConceito_id,
    } = conceito;

    const conceitoExists = await prismaClient.conceito.findFirst({
      where: {
        id: conceito_id,
      },
    });

    if (!conceitoExists) {
      throw new Error(`Boletim com ID ${conceito_id} não encontrado.`);
    }

    const conceitoAvaliacaoEdited = await prismaClient.conceitoAvaliacao.update(
      {
        where: {
          id: id,
        },
        data: {
          avaliacao1B_id: avaliacao1B_id,
          avaliacao2B_id: avaliacao2B_id,
          avaliacao3B_id: avaliacao3B_id,
          avaliacao4B_id: avaliacao4B_id,
          conceito_id: conceito_id,
          desenvolvimentoConceito_id: desenvolvimentoConceito_id,
        },
      }
    );

    return conceitoAvaliacaoEdited;
  }
}

class GetEditConceitoAvaliacaoService {
  async execute(conceitoAvaliacao_id: string) {
    const conceitoAvaliacao = await prismaClient.conceitoAvaliacao.findUnique({
      where: {
        id: conceitoAvaliacao_id,
      },
      select: {
        id: true,
        avaliacao1B_id: true,
        avaliacao2B_id: true,
        avaliacao3B_id: true,
        avaliacao4B_id: true,
        conceito_id: true,
        desenvolvimentoConceito_id: true,
      },
    });
    return conceitoAvaliacao;
  }
  catch(error) {
    console.error("Error fetching conceito avaliação:", error);
    throw new Error("Failed to fetch conceito avaliação");
  }
}

class ListConceitoAvaliacaoService {
  async execute(conceitoId: string) {
    const conceitoAvaliacao = await prismaClient.conceitoAvaliacao.findMany({
      where: {
        conceito_id: conceitoId,
      },
      select: {
        id: true,
        avaliacao1B_id: true,
        avaliacao2B_id: true,
        avaliacao3B_id: true,
        avaliacao4B_id: true,
        conceito_id: true,
        desenvolvimentoConceito_id: true,
        DesenvolvimentoConceito: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return conceitoAvaliacao;
  }
}

export {
  CreateConceitoAvaliacaoService,
  EditConceitoAvaliacaoService,
  GetEditConceitoAvaliacaoService,
  ListConceitoAvaliacaoService,
};
