import { DisciplinaSerieRequest } from "../models/interfaces/DisciplinaSerieRequest";
import prismaClient from "../prisma";

class CreateDisciplinaSerieService {
  async execute({ disciplina_id, serie_id }: DisciplinaSerieRequest) {
    const disciplinaSerie = await prismaClient.disciplinaSerie.create({
      data: {
        disciplina_id: disciplina_id,
        ativo: true,
        serie_id: serie_id,
      },
    });
    return disciplinaSerie;
  }
}

class EditDisciplinaSerieService {
  async execute({
    disciplina_id,
    serie_id,
    ativo,
    id,
  }: DisciplinaSerieRequest) {
    const disciplinaSerieExists = await prismaClient.disciplinaSerie.findFirst({
      where: {
        id: id,
      },
    });

    if (!disciplinaSerieExists) {
      throw new Error("disciplinas não encontradas!");
    }

    const disciplinaSerieEdited = await prismaClient.disciplinaSerie.update({
      where: {
        id: id,
      },
      data: {
        disciplina_id: disciplina_id,
        serie_id: serie_id,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return disciplinaSerieEdited;
  }
}

class GetEditDisciplinaSerieService {
  async execute(disciplinaSerie_id: string) {
    const disciplinaSerie = await prismaClient.disciplinaSerie.findUnique({
      where: {
        id: disciplinaSerie_id,
      },
      select: {
        id: true,
        ativo: true,
        disciplina_id: true,
        serie_id: true,
      },
    });
    return disciplinaSerie;
  }
  catch(error) {
    console.error("Error fetching disciplinas:", error);
    throw new Error("Failed to fetch disciplinas"); 
  }
}

class ListDisciplinaSerieService {
  async execute(serieId: string) {
    const disciplinaSerie = await prismaClient.disciplinaSerie.findMany({
      where: {
        serie_id: serieId,
        ativo: true,
      },
      select: {
        id: true,
        ativo: true,
        disciplina_id: true,
        serie_id: true,
        Disciplina: true,
        Serie: true
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return disciplinaSerie;
  }
}

export {
  CreateDisciplinaSerieService,
  EditDisciplinaSerieService,
  GetEditDisciplinaSerieService,
  ListDisciplinaSerieService,
};
