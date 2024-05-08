import { DocumentoRequest } from "../models/interfaces/DocumentoRequest";
import prismaClient from "../prisma";

class CreateDocumentoService {
  async execute({ nome, ativo }: DocumentoRequest) {
    const documento = await prismaClient.documento.create({
      data: {
        nome,
        ativo,
      },
    });
    return documento;
  }
}

class EditDocumentoService {
  async execute({ id, nome, ativo }: DocumentoRequest) {
    const documentoExists = await prismaClient.documento.findFirst({
      where: {
        id: id,
        ativo: true,
      },
    });
    if (!documentoExists) {
      throw new Error("Erro ao localizar o documento!");
    }
    const documento = await prismaClient.documento.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return documento;
  }
}

class GetEditDocumentoService {
  async execute(documento_id: string) {
    const documento = await prismaClient.documento.findUnique({
      where: {
        id: documento_id,
      },
    });
    return documento;
  }
}

class ListDocumentoService {
  async execute() {
    const documento = await prismaClient.documento.findMany({
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
    return documento;
  }
}

export {
  CreateDocumentoService,
  EditDocumentoService,
  GetEditDocumentoService,
  ListDocumentoService,
};
