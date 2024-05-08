import {
  CreateCorRequest,
  EditCorRequest,
} from "../models/interfaces/CorRequest";
import prismaClient from "../prisma";

class CreateCorService {
  async execute({ nome, ativo }: CreateCorRequest) {
    
    // if (nome.length == 0) {  
    //   throw new Error();
    // }
   
    const cor = await prismaClient.cor.create({
      data: {
        nome: nome,
        ativo: true,
      },
    });
    return cor;
  }
}

class EditCorService {
  async execute({ nome, ativo, id }: EditCorRequest) {
    const corExists = await prismaClient.cor.findFirst({
      where: {
        id: id,
      },
    });

    if (!corExists) {
      throw new Error("Cor não encontrada!");
    }

    const corEdited = await prismaClient.cor.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return corEdited;
  }
}

class getEditCorService {
  async execute(cor_id: string) {
    const cor = await prismaClient.cor.findUnique({
      where: {
        id: cor_id,
      },
    });
    return cor;
  }
  catch(error) {
    console.error("Error fetching cor:", error);
    throw new Error("Failed to fetch cor");
  }
}

class ListCorService {
  async execute() {
    const cor = await prismaClient.cor.findMany({
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
    return cor;
  }
}

export { ListCorService, EditCorService, getEditCorService, CreateCorService };
