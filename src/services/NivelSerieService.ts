import { NivelSerieRequest } from "../models/interfaces/NivelSerieRequest";
import prismaClient from "../prisma";

class CreateNivelSerieService {
  async execute({ nome, valorTaxaPapelaria, ativo }: NivelSerieRequest) {
    const nivelSerie = await prismaClient.nivelSerie.create({
      data: {
        nome,
        valorTaxaPapelaria,
        ativo,
      },
    });
    return nivelSerie;
  }
}

class EditNivelSerieService {
  async execute({ id, nome, valorTaxaPapelaria, ativo }: NivelSerieRequest) {
    const nivelSerieExists = await prismaClient.nivelSerie.findFirst({
      where: {
        id: id,
        ativo: true,
      },
    });
    if (!nivelSerieExists) {
      throw new Error("Erro ao localizar nível de série!");
    }
    const EditNivelSerie = await prismaClient.nivelSerie.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        valorTaxaPapelaria: valorTaxaPapelaria,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return EditNivelSerie;
  }
}

class GetEditNivelSerieService {
  async execute(nivelSerie_id) {
    const nivelSerie = await prismaClient.nivelSerie.findUnique({
      where: {
        id: nivelSerie_id,
      },
      select: {
        id: true,
        valorTaxaPapelaria: true,
        nome: true,
        ativo: true,
      },
    });
    return nivelSerie;
  }
}

class ListNivelSerieService {
  async execute() {
    const nivelSerie = await prismaClient.nivelSerie.findMany({
      where: {
        ativo: true,
      },
      select: {
        id: true,
        valorTaxaPapelaria: true,
        nome: true,
        ativo: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return nivelSerie;
  }
}

export {
  CreateNivelSerieService,
  EditNivelSerieService,
  GetEditNivelSerieService,
  ListNivelSerieService,
};
