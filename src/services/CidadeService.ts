import { CidadeRequest } from "../models/interfaces/CidadeRequest";
import prismaClient from "../prisma";

class CreateCidadeService {
  async execute({ nome, estado_id, ativo }: CidadeRequest) {
    const cidade = await prismaClient.cidade.create({
      data: {
        nome: nome,
        estado_id: estado_id,
        ativo: ativo,
      },
    });
    return cidade;
  }
}

class EditCidadeService {
  async execute({ id, nome, estado_id, ativo }: CidadeRequest) {
    const cidadeExists = await prismaClient.cidade.findFirst({
      where: {
        id: id,
        ativo: true,
      },
    });

    if (!cidadeExists) {
      throw new Error("Cidade não encontrada!");
    }

    const cidadeEdited = await prismaClient.cidade.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        Estado: {
          connect: { id: estado_id },
        },
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return cidadeEdited;
  }
}

class GetEditCidadeService {
  async execute(cidade_id: string) {
    const cidade = await prismaClient.cidade.findUnique({
      where: {
        id: cidade_id,
      },
      select: {
        id: true,
        nome: true,
        estado_id: true,
        ativo: true,
      },
    });
    return cidade;
  }
  catch(error) {
    console.error("Error fetching cidade:", error);
    throw new Error("Failed to fetch cidade");
  }
}

class ListCidadeService {
  async execute() {
    const cidade = await prismaClient.cidade.findMany({
      where: {
        ativo: true,
      },
      select: {
        id: true,
        nome: true,
        Estado: true,
        ativo: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return cidade;
  }
}

export {
  CreateCidadeService,
  GetEditCidadeService,
  EditCidadeService,
  ListCidadeService,
};
