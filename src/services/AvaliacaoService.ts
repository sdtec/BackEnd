import { Request } from "express";
import { Response } from "express";
import { AvaliacaoRequest } from "../models/interfaces/AvaliacaoRequest";
import prismaClient from "../prisma";

class ListAvaliacaoService {
  async execute() {
    const avaliacao = await prismaClient.avaliacao.findMany({
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
    return avaliacao;
  }
}

export {
  ListAvaliacaoService,
};
