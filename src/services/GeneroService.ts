import { GeneroRequest } from "../models/interfaces/GeneroRequest";
import prismaClient from "../prisma";

class CreateGeneroService {
  async execute({ nome, ativo }: GeneroRequest) {
    const genero = await prismaClient.genero.create({
      data: {
        nome,
        ativo,
      },
    });
    return genero;
  }
}

class GetEditGeneroService {
  async execute(genero_id) {
    const genero = await prismaClient.genero.findUnique({
      where: {
        id: genero_id,
      },
      select: {
        id: true,
        nome: true,
        ativo: true,
      },
    });
    return genero;
  }
}

class EditGeneroService {
  async execute({ id, nome, ativo }: GeneroRequest) {
    const generoExists = await prismaClient.genero.findFirst({
      where: {
        id: id,
        ativo: true,
      },
    });
    if (!generoExists) {
      throw new Error("Erro ao localizar o gênero!");
    }
    const EditGenero = await prismaClient.genero.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return EditGenero;
  }
}

class ListGeneroService {
  async execute() {
    const genero = await prismaClient.genero.findMany({
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
    return genero;
  }
}

export {
  CreateGeneroService,
  EditGeneroService,
  GetEditGeneroService,
  ListGeneroService,
};
