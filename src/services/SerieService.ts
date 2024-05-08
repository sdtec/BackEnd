import { SerieRequest } from "../models/interfaces/SerieRequest";
import prismaClient from "../prisma";


class CreateSerieService {
  async execute({ nome, ativo,ordem,nivelSerie_id }: SerieRequest) {
    const serie = await prismaClient.serie.create({
      data: {
        nome: nome,
        ativo: ativo,
        ordem: ordem,
        nivelSerie_id: nivelSerie_id
      },
    });
    return serie;
  }
}

class EditSerieService {
  async execute({ nome, ativo, id , ordem, nivelSerie_id}: SerieRequest) {
    const serieExists = await prismaClient.serie.findFirst({
      where: {
        id: id,
      },
    });

    if (!serieExists) {
      throw new Error("Série não encontrada!");
    }

    const serieEdited = await prismaClient.serie.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        ordem: ordem,
        nivelSerie_id: nivelSerie_id,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return serieEdited;
  }
}

class GetEditSerieService {
  async execute(serie_id: string) {
    const serie = await prismaClient.serie.findUnique({
      where: {
        id: serie_id,
      },
      select: {
        id: true,
        nome: true,
        ordem: true,
        nivelSerie_id: true,
        ativo: true,
      },
    });
    return serie;
  }
  catch(error) {
    console.error("Error fetching série:", error);
    throw new Error("Failed to fetch série");
  }
}

class ListSerieService {
  async execute() {
    const serie = await prismaClient.serie.findMany({
      where: {
        ativo: true,
      },
      select: {
        id: true,
        nome: true,
        ordem: true,
        nivelSerie_id: true,
        NivelSerie: true,
        ativo: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return serie;
  }
}

export {
  CreateSerieService,
  EditSerieService,
  GetEditSerieService,
  ListSerieService
};
