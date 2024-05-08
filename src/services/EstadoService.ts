import { EstadoRequest } from "../models/interfaces/EstadoRequest";
import prismaClient from "../prisma";

class CreateEstadoService {
  async execute({ sigla, nome, nacionalidade_id, ativo }: EstadoRequest) {
    const estado = await prismaClient.estado.create({
      data: {
        nome: nome,
        sigla: sigla,
        Nacionalidade: {
          connect: { id: nacionalidade_id },
        },
        ativo: ativo,
      },
    });
    return estado;
  }
}

class EditEstadoService {
  async execute({ id, nome, sigla,nacionalidade_id, ativo }: EstadoRequest) {
    const estadoExists = await prismaClient.estado.findFirst({
      where: {
        id: id,
        ativo: true,
      },
    });

    if (!estadoExists) {
      throw new Error("Estado não encontrado!");
    }

    const estadoEdited = await prismaClient.estado.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        sigla: sigla,
        nacionalidade_id: nacionalidade_id,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return estadoEdited;
  }
}

class GetEditEstadoService {
  async execute(estado_id: string) {
    const estado = await prismaClient.estado.findUnique({
      where: {
        id: estado_id,
      },
      select: {
        id: true,
        nome: true,
        sigla: true,
        nacionalidade_id: true,
        ativo: true,
        Nacionalidade: {
          select: {
            nome: true,
          },
        },
      },
    });
    return estado;
  }
  catch(error) {
    console.error("Error fetching estado:", error);
    throw new Error("Failed to fetch estado");
  }
}

class ListEstadoService {
  async execute() {
    const estado = await prismaClient.estado.findMany({
      where: {
        ativo: true,
      },
      select: {
        id: true,
        nome: true,
        sigla: true,
        nacionalidade_id: true,
        ativo: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return estado;
  }
}

export {
  CreateEstadoService,
  GetEditEstadoService,
  EditEstadoService,
  ListEstadoService,
};
