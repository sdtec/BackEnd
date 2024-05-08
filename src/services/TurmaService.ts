import { TurmaRequest } from "../models/interfaces/TurmaRequest";
import prismaClient from "../prisma";

class CreateTurmaService {
  async execute({
    nome,
    numeroCapacidade,
    anoCalendario,
    horarioFinal,
    horarioInicial,
    sala_id,
    serie_id,
    turno_id,
    valorIntegral,
    valorMeioPeriodo,
    valorMensalidade,
    valorSemiIntegral,
    ativo,
    ordem,
  }: TurmaRequest) {
    const turma = await prismaClient.turma.create({
      data: {
        nome: nome,
        ativo: ativo,
        ordem: ordem,
        numeroCapacidade: numeroCapacidade,
        anoCalendario: anoCalendario,
        horarioFinal: horarioFinal,
        horarioInicial: horarioInicial,
        sala_id: sala_id,
        serie_id: serie_id,
        turno_id: turno_id,
        valorIntegral: valorIntegral,
        valorMeioPeriodo: valorMeioPeriodo,
        valorMensalidade: valorMensalidade,
        valorSemiIntegral: valorSemiIntegral,
      },
    });
    return turma;
  }
}

class EditTurmaService {
  async execute({
    nome,
    ativo,
    anoCalendario,
    horarioFinal,
    horarioInicial,
    numeroCapacidade,
    ordem,
    sala_id,
    serie_id,
    turno_id,
    valorIntegral,
    valorMeioPeriodo,
    valorMensalidade,
    valorSemiIntegral,
    id,
  }: TurmaRequest) {
    const turmaExists = await prismaClient.turma.findFirst({
      where: {
        id: id,
        ativo: true,
      },
    });

    if (!turmaExists) {
      throw new Error("Turma não encontrada!");
    }

    const turmaEdited = await prismaClient.turma.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        anoCalendario: anoCalendario,
        horarioFinal: horarioFinal,
        horarioInicial: horarioInicial,
        numeroCapacidade: numeroCapacidade,
        ordem: ordem,
        sala_id: sala_id,
        serie_id: serie_id,
        turno_id: turno_id,
        valorIntegral: valorIntegral,
        valorMeioPeriodo: valorMeioPeriodo,
        valorMensalidade: valorMensalidade,
        valorSemiIntegral: valorSemiIntegral,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return turmaEdited;
  }
}

class GetEditTurmaService {
  async execute(turma_id: string) {
    const turma = await prismaClient.turma.findUnique({
      where: {
        id: turma_id,
      },
      select: {
        id: true,
        nome: true,
        ordem: true,
        anoCalendario: true,
        horarioFinal: true,
        horarioInicial: true,
        numeroCapacidade: true,
        sala_id: true,
        serie_id: true,
        turno_id: true,
        valorIntegral: true,
        valorMeioPeriodo: true,
        valorMensalidade: true,
        valorSemiIntegral: true,
        ativo: true,
      },
    });
    return turma;
  }
  catch(error) {
    console.error("Error fetching turma:", error);
    throw new Error("Failed to fetch turma");
  }
}

class ListTurmaService {
  async execute() {
    const turma = await prismaClient.turma.findMany({
      where: {
        ativo: true,
      },
      select: {
        id: true,
        nome: true,
        anoCalendario: true,
        horarioFinal: true,
        horarioInicial: true,
        numeroCapacidade: true,
        Serie: {
          select: {
            nome: true,
          },
        },
        Turno: {
          select: {
            nome: true,
          },
        },
        Sala: {
          select: {
            nome: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return turma;
  }
}
class ListTurmaSerieService {
  async execute(serieId: string, anoLetivo: number) {
    const turma = await prismaClient.turma.findMany({
      where: {
        serie_id: serieId,
        anoCalendario: anoLetivo,
        ativo: true,
      },
      select: {
        id: true,
        nome: true,
        ordem: true,
        anoCalendario: true,
        horarioFinal: true,
        horarioInicial: true,
        numeroCapacidade: true,
        sala_id: true,
        serie_id: true,
        turno_id: true,
        valorIntegral: true,
        valorMeioPeriodo: true,
        valorMensalidade: true,
        valorSemiIntegral: true,
        ativo: true,
        Serie: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return turma;
  }
}

export {
  CreateTurmaService,
  EditTurmaService,
  GetEditTurmaService,
  ListTurmaService,
  ListTurmaSerieService,
};
