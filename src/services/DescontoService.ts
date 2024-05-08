import { DescontoRequest } from "../models/interfaces/DescontoRequest";
import prismaClient from "../prisma";

class CreateDescontoService {
  async execute({ nome, valor, ativo, tipo }: DescontoRequest) {
    const desconto = await prismaClient.desconto.create({
      data: {
        nome: nome,
        valor: valor,
        ativo: ativo,
        tipo: tipo,
      },
    });
    return desconto;
  }
}
class GetEditDescontoService {
  async execute(desconto_id: string) {
    const desconto = await prismaClient.desconto.findUnique({
      where: {
        id: desconto_id,
      },
    });
    return desconto;
  }
  catch(error) {
    console.error("Error fetching Desconto", error);
    throw new Error("Error fecth Desconto");
  }
}

class EditDescontoService {
  async execute({
    id,
    nome,
    ativo,
    valor,
    tipo,
  }: DescontoRequest) {
    const descontoExists = await prismaClient.desconto.findFirst({
      where: {
        id: id,
      },
    });

    if (!descontoExists) {
      throw new Error("Error ao localizar desconto!");
    }

    const EditDesconto = await prismaClient.desconto.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        ativo: ativo,
        valor: valor,
        tipo: tipo,
        updated_at: new Date().toISOString(),
      },
    });

    return EditDesconto;
  }
}

class ListDescontoService {
  async execute() {
    const desconto = prismaClient.desconto.findMany({
      where: {
        ativo: true,
      },
      select: {
        id: true,
        nome: true,
        valor: true,
        tipo: true,
        ativo: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return desconto;
  }
}

export {
  CreateDescontoService,
  GetEditDescontoService,
  EditDescontoService,
  ListDescontoService,
};
