import { TipoContratoRequest } from "../models/interfaces/TipoContratoRequest";
import prismaClient from "../prisma";

class CreateTipoContratoService {
  async execute({ nome, ativo }: TipoContratoRequest) {
    
    const cor = await prismaClient.tipoContrato.create({
      data: {
        nome: nome,
        ativo: ativo,
      },
    });
    return cor;
  }
}

class EditTipoContratoService {
  async execute({ nome, ativo, id }: TipoContratoRequest) {
    const tipoContratoExists = await prismaClient.tipoContrato.findFirst({
      where: {
        id: id,
      },
    });

    if (!tipoContratoExists) {
      throw new Error("Tipo de contrato não encontrada!");
    }

    const tipoContratoEdited = await prismaClient.tipoContrato.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return tipoContratoEdited;
  }
}

class GetEditTipoContratoService {
  async execute(tipoContrato_id: string) {
    const tipoContrato = await prismaClient.tipoContrato.findUnique({
      where: {
        id: tipoContrato_id,
      },
      select: {
        id: true,
        nome: true,
        ativo: true,
      },
    });
    return tipoContrato;
  }
  catch(error) {
    console.error("Error fetching tipo contrato:", error);
    throw new Error("Failed to fetch tipo contrato");
  }
}

class ListTipoContratoService {
  async execute() {
    const tipoContrato = await prismaClient.tipoContrato.findMany({
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
    return tipoContrato;
  }
}

export {
  CreateTipoContratoService,
  EditTipoContratoService,
  GetEditTipoContratoService,
  ListTipoContratoService,
};
