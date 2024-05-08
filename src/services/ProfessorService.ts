import { ProfessorRequest } from "../models/interfaces/ProfessorRequest";
import prismaClient from "../prisma";

class CreateProfessorService {
  async execute({
    nome,
    ativo,
    email,
    lancarNotaRetroativa,
    senha,
    telefoneCelular,
    telefoneComercial,
  }: ProfessorRequest) {
    const professor = await prismaClient.professor.create({
      data: {
        nome,
        ativo,
        email,
        lancarNotaRetroativa,
        senha,
        telefoneCelular,
        telefoneComercial,
      },
    });
    return professor;
  }
}

class EditProfessorService {
  async execute({
    id,
    nome,
    ativo,
    email,
    lancarNotaRetroativa,
    senha,
    telefoneCelular,
    telefoneComercial,
  }: ProfessorRequest) {
    const professorExists = await prismaClient.professor.findFirst({
      where: {
        ativo: true,
        id: id,
      },
    });
    if (!professorExists) {
      throw new Error("Erro ao localizar professor!");
    }
    const EditProfessor = await prismaClient.professor.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        ativo: ativo,
        email: email,
        lancarNotaRetroativa: lancarNotaRetroativa,
        senha: senha,
        telefoneCelular: telefoneCelular,
        telefoneComercial: telefoneComercial,
        updated_at: new Date().toISOString(),
      },
    });
    return EditProfessor;
  }
}

class GetEditProfessorService {
  async execute(professor_id: string) {
    const professor = await prismaClient.professor.findUnique({
      where: {
        id: professor_id,
      },
      select: {
        id: true,
        nome: true,
        ativo: true,
        email: true,
        lancarNotaRetroativa: true,
        senha: true,
        telefoneCelular: true,
        telefoneComercial: true,
      },
    });
    return professor;
  }
}

class ListProfessorService {
  async execute() {
    const professor = await prismaClient.professor.findMany({
      where: {
        ativo: true,
      },
      select: {
        id: true,
        ativo: true,
        email: true,
        lancarNotaRetroativa: true,
        nome: true,
        senha: true,
        telefoneCelular: true,
        telefoneComercial: true,
      },
      orderBy: {
        nome: "asc",
      },
    });
    return professor;
  }
}

export {
  CreateProfessorService,
  EditProfessorService,
  GetEditProfessorService,
  ListProfessorService,
};
