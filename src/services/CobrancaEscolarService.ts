import { CobrancaEscolarRequest } from "../models/interfaces/CobrancaEscolarRequest";
import prismaClient from "../prisma";
import { Request, Response } from "express";

class CreateCobrancaEscolarService {
  async execute({
    ativo,
    dataVencimento,
    nivelSerie_id,
    quantidadeParcela,
    valorIntegral,
    valorMeioPeriodo,
    valorSemiIntegral,
  }: CobrancaEscolarRequest) {
    
      const cobrancaEscolar = await prismaClient.cobrancaEscolar.create({
        data: {
          ativo: ativo,
          dataVencimento: dataVencimento,
          valorIntegral: valorIntegral,
          valorMeioPeriodo: valorMeioPeriodo,
          valorSemiIntegral: valorSemiIntegral,
          quantidadeParcela: quantidadeParcela,
          nivelSerie_id: nivelSerie_id,
        },
      });
      return cobrancaEscolar;

  }
}

class EditCobrancaEscolarService {
  async execute({
    id,
    ativo,
    dataVencimento,
    nivelSerie_id,
    quantidadeParcela,
    valorIntegral,
    valorMeioPeriodo,
    valorSemiIntegral,
  }: CobrancaEscolarRequest) {
    const cobrancaEscolarExists = await prismaClient.cobrancaEscolar.findFirst({
      where: {
        id: id,
      },
    });

    if (!cobrancaEscolarExists) {
      throw new Error("Cobrança Escolar não encontrada!");
    }
    const cobrancaEscolarEdited = await prismaClient.cobrancaEscolar.update({
      where: {
        id: id,
      },
      data: {
        ativo: ativo,
        dataVencimento: dataVencimento,
        NivelSerie: {
          connect: { id: nivelSerie_id },
        },
        quantidadeParcela: quantidadeParcela,
        valorIntegral: valorIntegral,
        valorMeioPeriodo: valorMeioPeriodo,
        valorSemiIntegral: valorSemiIntegral,
        updated_at: new Date().toISOString(),
      },
    });
    return cobrancaEscolarEdited;
  }
}

class GetEditCobrancaEscolarService {
  async execute(cobrancaEscolar_id: string) {
    const cobrancaEscolar = await prismaClient.cobrancaEscolar.findUnique({
      where: {
        id: cobrancaEscolar_id,
      },
      select: {
        id: true,
        dataVencimento: true,
        nivelSerie_id: true,
        quantidadeParcela: true,
        valorIntegral: true,
        valorMeioPeriodo: true,
        valorSemiIntegral: true,
        ativo: true,
      },
    });
    return cobrancaEscolar;
  }
  catch(error) {
    throw new Error("Failed to fetch cobrança escolar");
  }
}

class ListCobrancaEscolarService {
  async execute() {
    const cobrancaEscolar = await prismaClient.cobrancaEscolar.findMany({
      where: {
        ativo: true,
      },
      select: {
        id: true,
        dataVencimento: true,
        nivelSerie_id: true,
        NivelSerie: true,
        quantidadeParcela: true,
        valorIntegral: true,
        valorMeioPeriodo: true,
        valorSemiIntegral: true,
        ativo: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return cobrancaEscolar;
  }
}

export {
  CreateCobrancaEscolarService,
  EditCobrancaEscolarService,
  GetEditCobrancaEscolarService,
  ListCobrancaEscolarService,
};
