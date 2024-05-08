import { SalaRequest } from "../models/interfaces/SalaRequest";
import prismaClient from "../prisma";

class CreateSalaService {
  async execute({ nome, ativo }: SalaRequest) {
    const sala = await prismaClient.sala.create({
      data: {
        nome,
        ativo,
      },
    });
    return sala;
  }
}

class EditSalaService {
  async execute({ id, nome, ativo }: SalaRequest) {
    const salaExists = await prismaClient.sala.findFirst({
      where: {
        id: id,
        ativo: true,
      },
    });
    if (!salaExists) {
      throw new Error("Erro ao localizar a sala!");
    }
    const sala = await prismaClient.sala.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return sala;
  }
}

class GetEditSalaService {
  async execute(sala_id: string) {
    const sala = await prismaClient.sala.findUnique({
      where: {
        id: sala_id,
      },
      select: {
        id: true,
        nome: true,
        ativo: true,
      },
    });
    return sala;
  }
}

class ListSalaService {
  async execute() {
    const sala = await prismaClient.sala.findMany({
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
    return sala;
  }
}

export {
  CreateSalaService,
  EditSalaService,
  GetEditSalaService,
  ListSalaService,
};
