import { DisciplinaRequest } from "../models/interfaces/DisciplinaRequest";
import prismaClient from "../prisma";

class CreateDisciplinaService {
  async execute({
    nome,
    ativo,
    cargaHoraria,
    ordem,
    valorCobrado,
  }: DisciplinaRequest) {
    const disciplina = await prismaClient.disciplina.create({
      data: {
        nome,
        ativo,
        cargaHoraria,
        ordem,
        valorCobrado,
      },
    });
    return disciplina;
  }
}

class GetEditDisciplinaService {
  async execute(disciplina_id: string) {
    const disciplina = await prismaClient.disciplina.findUnique({
      where: {
        id: disciplina_id,
      },
      select: {
        id: true,
        nome: true,
        cargaHoraria: true,
        valorCobrado: true,
        ordem: true,
        ativo: true,
      },
    });
    return disciplina;
  }
}

class EditDisciplinaService {
  async execute({
    id,
    nome,
    ordem,
    cargaHoraria,
    ativo,
    valorCobrado,
  }: DisciplinaRequest) {
    const disciplinaExists = await prismaClient.disciplina.findFirst({
      where: {
        id: id,
      },
    });
    if (!disciplinaExists) {
      throw new Error("Erro ao localizar disciplina!");
    }
    const disciplina = await prismaClient.disciplina.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        ativo: ativo,
        cargaHoraria: cargaHoraria,
        ordem: ordem,
        updated_at: new Date().toISOString(),
        valorCobrado: valorCobrado,
      },
    });
  }
}
class ListDisciplinaService {
  async execute() {
    const disciplina = await prismaClient.disciplina.findMany({
      where: {
        ativo: true,
      },
      select: {
        id: true,
        nome: true,
        ativo: true,
        cargaHoraria: true,
        ordem: true,
        valorCobrado: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return disciplina;
  }
}
export {
  CreateDisciplinaService,
  EditDisciplinaService,
  GetEditDisciplinaService,
  ListDisciplinaService,
};
