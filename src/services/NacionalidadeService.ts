import { NacionalidadeRequest } from "../models/interfaces/NacionalidadeRequest";
import prismaClient from "../prisma";

class CreateNacionalidadeService {
  async execute({ nome, ativo }: NacionalidadeRequest) {
    const nacionalidade = await prismaClient.nacionalidade.create({
      data: {
        nome,
        ativo,
      },
    });
    return nacionalidade;
  }
}

class EditNacionalidadeService {
  async execute({ id, nome, ativo }: NacionalidadeRequest) {
    const nacionalidadeExists = await prismaClient.nacionalidade.findFirst({
      where: {
        id: id,
        ativo: true,
      },
    });
    if (!nacionalidadeExists) {
      throw new Error("Erro ao localizar a nacionalidade!");
    }
    const nacionalidade = await prismaClient.nacionalidade.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return nacionalidade;
  }
}

class GetEditNacionalidadeService {
  async execute(nacionalidade_id: string) {
    const nacionalidade = await prismaClient.nacionalidade.findUnique({
      where: {
        id: nacionalidade_id,
      },
      select: {
        id: true,
        nome: true,
        ativo: true,
      },
    });
    return nacionalidade;
  }
}

class ListNacionalidadeService {
  async execute() {
    const nacionalidade = await prismaClient.nacionalidade.findMany({
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
    return nacionalidade;
  }
}

export {
  CreateNacionalidadeService,
  EditNacionalidadeService,
  GetEditNacionalidadeService,
  ListNacionalidadeService,
};
