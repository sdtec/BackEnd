import { CobrancaModalidadeRequest } from "../models/interfaces/CobrancaModalidadeRequest";
import prismaClient from "../prisma";
export function formatISO(data) {
  let formatISO = new Date(data).toISOString();
  return new Date(formatISO);
}
class CreateCobrancaModalidadeService {
  async execute({
    ativo,
    dataVencimento,
    modalidade_id,
    quantidadeParcela,
    valor,
  }: CobrancaModalidadeRequest) {
    const cobrancaModalidade = await prismaClient.cobrancaModalidade.create({
      data: {
        dataVencimento: dataVencimento,
        quantidadeParcela: quantidadeParcela,
        valor: valor,
        ativo: ativo,
        modalidade_id: modalidade_id,
      },
    });
    return cobrancaModalidade;
  }
}

class EditCobrancaModalidadeService {
  async execute({
    id,
    ativo,
    dataVencimento,
    modalidade_id,
    quantidadeParcela,
    valor,
  }: CobrancaModalidadeRequest) {
    const cobrancaModalidadeExists =
      await prismaClient.cobrancaModalidade.findFirst({
        where: {
          id: id,
        },
      });

    if (!cobrancaModalidadeExists) {
      throw new Error("Cobrança da modalidade não encontrada!");
    }

    const cobrancaModalidadeEdited =
      await prismaClient.cobrancaModalidade.update({
        where: {
          id: id,
        },
        data: {
          ativo: ativo,
          dataVencimento: dataVencimento,
          Modalidade: {
            connect: { id: modalidade_id },
          },
          quantidadeParcela: quantidadeParcela,
          valor: valor,
          updated_at: new Date().toISOString(),
        },
      });
    return cobrancaModalidadeEdited;
  }
}

class GetEditCobrancaModalidadeService {
  async execute(cobrancaModalidade_id: string) {
    const cobrancaModalidade = await prismaClient.cobrancaModalidade.findUnique(
      {
        where: {
          id: cobrancaModalidade_id,
        },
        select: {
          id: true,
          ativo: true,
          dataVencimento: true,
          modalidade_id: true,
          quantidadeParcela: true,
          valor: true,
        },
      }
    );
    return cobrancaModalidade;
  }
  catch(error) {
    console.error("Error fetching cobrança da modalidade:", error);
    throw new Error("Failed to fetch cobrança da modalidade");
  }
}

class ListCobrancaModalidadeService {
  async execute() {
    const cobrancaModalidade = await prismaClient.cobrancaModalidade.findMany({
      where: {
        ativo: true,
      },
      select: {
        id: true,
        ativo: true,
        modalidade_id: true,
        Modalidade: true,
        quantidadeParcela: true,
        valor: true,
        dataVencimento: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return cobrancaModalidade;
  }
}

export {
  CreateCobrancaModalidadeService,
  EditCobrancaModalidadeService,
  GetEditCobrancaModalidadeService,
  ListCobrancaModalidadeService,
};
