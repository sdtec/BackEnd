import { TurnoRequest } from "../models/interfaces/TurnoRequest";
import prismaClient from "../prisma";

class CreateTurnoService {
  async execute({ nome, ativo }: TurnoRequest) {
    const turno = await prismaClient.turno.create({
      data: {
        nome: nome,
        ativo: ativo,
      },
    });
    return turno;
  }
}

class EditTurnoService {
  async execute({ nome, ativo, id }: TurnoRequest) {
    const turnoExists = await prismaClient.turno.findFirst({
      where: {
        id: id,
      },
    });

    if (!turnoExists) {
      throw new Error("Turno não encontrada!");
    }

    const turnoEdited = await prismaClient.turno.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return turnoEdited;
  }
}

class GetEditTurnoService {
  async execute(turno_id: string) {
    const turno = await prismaClient.turno.findUnique({
      where: {
        id: turno_id,
      },
      select: {
        id: true,
        nome: true,
        ativo: true,
      },
    });
    return turno;
  }
  catch(error) {
    console.error("Error fetching turno:", error);
    throw new Error("Failed to fetch turno");
  }
}

class ListTurnoService {
  async execute() {
    const turno = await prismaClient.turno.findMany({
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
    return turno;
  }
}

export {
  CreateTurnoService,
  EditTurnoService,
  GetEditTurnoService,
  ListTurnoService,
};
