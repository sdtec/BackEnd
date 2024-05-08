import { TurmaModalidadeRequest } from "../models/interfaces/TurmaModalidadeRequest";
import prismaClient from "../prisma";

class CreateTurmaModalidadeService {
  async execute({
    nome,
    anoCalendario,
    dataVencimentoParcela,
    modalidade_id,
    numeroCapacidade,
    ativo,
    professor_id,
    turno_id,
    valorMensalidade,
    id
  }: TurmaModalidadeRequest) {
    const turmaModalidade = await prismaClient.turmaModalidade.create({
      data: {
        nome: nome,
        anoCalendario: anoCalendario,
        dataVencimentoParcela: dataVencimentoParcela,
        modalidade_id: modalidade_id,
        numeroCapacidade: numeroCapacidade,
        ativo: ativo,
        professor_id: professor_id,
        turno_id: turno_id,
        valorMensalidade: valorMensalidade,
      },
    });
    return turmaModalidade;
  }
}

class EditTurmaModalidadeService {
  async execute({
    id,
    nome,
    numeroCapacidade,
    valorMensalidade,
    anoCalendario,
    dataVencimentoParcela,
    turno_id,
    modalidade_id,
    professor_id,
    ativo,
  }: TurmaModalidadeRequest) {
    const turmaModalidadeExists = await prismaClient.turmaModalidade.findFirst({
      where: {
        id: id,
      },
    });

    if (!turmaModalidadeExists) {
      throw new Error("Turma da modalidade não encontrada!");
    }

    const turmaModalidadeEdited = await prismaClient.turmaModalidade.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        numeroCapacidade: numeroCapacidade,
        valorMensalidade: valorMensalidade,
        anoCalendario: anoCalendario,
        dataVencimentoParcela: dataVencimentoParcela,
        turno_id: turno_id,
        modalidade_id: modalidade_id,
        professor_id: professor_id,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return turmaModalidadeEdited;
  }
}

class GetEditTurmaModalidadeService {
  async execute(turmaModalidade_id: string) {
    const turmaModalidade = await prismaClient.turmaModalidade.findUnique({
      where: {
        id: turmaModalidade_id,
      },
      select: {
        anoCalendario: true,
        ativo: true,
        dataVencimentoParcela: true,
        id: true,
        modalidade_id: true,
        nome: true,
        professor_id: true,
        turno_id: true,
        numeroCapacidade: true,
        valorMensalidade: true,
      },
    });
    return turmaModalidade;
  }
  catch(error) {
    console.error("Error fetching turma da modalidade:", error);
    throw new Error("Failed to fetch turma da modalidade");
  }
}

class ListTurmaModalidadeService {
  async execute(modalidade_id: string) {
    const turmaModalidade = await prismaClient.turmaModalidade.findMany({
      where: {
        modalidade_id: modalidade_id,
        ativo: true,
      },
      select: {
        anoCalendario: true,
        ativo: true,
        dataVencimentoParcela: true,
        id: true,
        modalidade_id: true,
        nome: true,
        professor_id: true,
        turno_id: true,
        numeroCapacidade: true,
        valorMensalidade: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return turmaModalidade;
  }
}

export {
  CreateTurmaModalidadeService,
  EditTurmaModalidadeService,
  GetEditTurmaModalidadeService,
  ListTurmaModalidadeService,
};
