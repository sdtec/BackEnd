import { BoletimRequest } from "../models/interfaces/BoletimRequest";
import prismaClient from "../prisma";

class EditBoletimService {
  async execute({
    id,
    aluno_id,
    turma_id,
    matricula_id,
    fechado,
    ano,
  }: BoletimRequest) {
    const boletimExists = await prismaClient.boletim.findFirst({
      where: {
        id: id,
      },
    });

    if (!boletimExists) {
      throw new Error("Boletim não encontrada!");
    }

    const boletimEdited = await prismaClient.boletim.update({
      where: {
        id: id,
      },
      data: {
        updated_at: new Date().toISOString(),
      },
    });
    return boletimEdited;
  }
}

class GetEditBoletimService {
  async execute(boletim_id: string) {
    const boletim = await prismaClient.boletim.findMany({
      where: {
        id: boletim_id,
      },
      select: {
        id: true,
        aluno_id: true,
        ano: true,
        fechado: true,
        matricula_id: true,
        turma_id: true,
      },
    });
    return boletim;
  }
  catch(error) {
    console.error("Error fetching boletim:", error);
    throw new Error("Failed to fetch boletim");
  }
}

class ListBoletimService {
  async execute() {
    const boletim = await prismaClient.boletim.findMany({
      select: {
        id: true,
        aluno_id: true,
        ano: true, 
        fechado: true,
        matricula_id: true,
        turma_id: true,
     Aluno: true,
     Turma: true,
     Matricula: {
      select: {
        anoLetivo: true
      }
     }

      },
      orderBy: {
        created_at: "desc",
      },
    });
    return boletim;
  }
}

export {
  GetEditBoletimService,
  EditBoletimService,
  ListBoletimService,
};