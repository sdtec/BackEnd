import { MatriculaRequest } from "../models/interfaces/MatriculaRequest";
import prismaClient from "../prisma";

class CreateMatriculaService {
  async execute({
    aluno_id,
    anoLetivo,
    dataMatricula,
    observacao,
    responsavel_id,
    situacao_id,
    tipoContrato_id,
    turma_id,
  }: MatriculaRequest) {
    const matriculaExists = await prismaClient.matricula.findFirst({
      where: {
        aluno_id: aluno_id,
        turma_id: turma_id,
      },
    });
    let existMatricula = !matriculaExists == false ? true : false;
    if (existMatricula != true) {
      const matricula = await prismaClient.matricula.create({
        data: {
          aluno_id: aluno_id,
          anoLetivo: anoLetivo,
          dataMatricula: dataMatricula,
          observacao: observacao,
          responsavel_id: responsavel_id,
          situacao_id: "dc5cbf03-22b5-4552-a083-4074ed429826",
          tipoContrato_id: tipoContrato_id,
          turma_id: turma_id,
        },
      });
      return matricula;
    } else {
      throw new Error("Aluno encontra-se matriculado nesta turma!");
    }
  }
}

class EditMatriculaService {
  async execute({
    id,
    aluno_id,
    anoLetivo,
    dataMatricula,
    observacao,
    responsavel_id,
    situacao_id,
    tipoContrato_id,
    turma_id,
  }: MatriculaRequest) {
    const matriculaExists = await prismaClient.matricula.findFirst({
      where: {
        id: id,
      },
    });

    if (!matriculaExists) {
      throw new Error("Matrícula não encontrada!");
    }

    const matriculaEdited = await prismaClient.matricula.update({
      where: {
        id: id,
      },
      data: {
        aluno_id: aluno_id,
        anoLetivo: anoLetivo,
        dataMatricula: dataMatricula,
        observacao: observacao,
        responsavel_id: responsavel_id,
        situacao_id: situacao_id,
        tipoContrato_id: tipoContrato_id,
        turma_id: turma_id,
        updated_at: new Date().toISOString(),
      },
    });
    return matriculaEdited;
  }
}

class GetEditMatriculaService {
  async execute(matricula_id: string) {
    const matricula = await prismaClient.matricula.findUnique({
      where: {
        id: matricula_id,
      },
      select: {
        id: true,
        aluno_id: true,
        anoLetivo: true,
        dataMatricula: true,
        observacao: true,
        responsavel_id: true,
        turma_id: true,
        situacao_id: true,
        tipoContrato_id: true,
        TipoContrato: true,
        Turma: {
          select: {
            id: true,
            nome: true,
            serie_id: true,
            Serie: true,
            anoCalendario: true,
          },
        },
        Aluno: true,
        Situacao: true,
        Responsavel: true,
      },
    });
    return matricula;
  }
  catch(error) {
    console.error("Error fetching matricula:", error);
    throw new Error("Failed to fetch matricula");
  }
}

class ListMatriculaService {
  async execute() {
    const matricula = await prismaClient.matricula.findMany({
      select: {
        id: true,
        aluno_id: true,
        anoLetivo: true,
        dataMatricula: true,
        observacao: true,
        responsavel_id: true,
        situacao_id: true,
        tipoContrato_id: true,
        Aluno: true,
        Responsavel: true,
        TipoContrato: true,
        Situacao: true,
        Conceito: true,
        Turma: {
          select: {
            Serie: true,
            nome: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return matricula;
  }
}

class ListConceitoMatriculaService {
  async execute(anoLetivo: number, turmaId: string) {
    const matricula = await prismaClient.matricula.findMany({
      where: {
        turma_id: turmaId,
        anoLetivo: anoLetivo,
      },
      select: {
        id: true,
        aluno_id: true,
        anoLetivo: true,
        dataMatricula: true,
        observacao: true,
        responsavel_id: true,
        situacao_id: true,
        tipoContrato_id: true,
        Aluno: true,
        Responsavel: true,
        Conceito: true,
        TipoContrato: true,
        Situacao: true,
        Turma: {
          select: {
            Serie: true,
            nome: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return matricula;
  }
}

class ListBoletimMatriculaService {
  async execute(serieId: string, anoLetivo: number, turmaId: string) {
    const matricula = await prismaClient.matricula.findMany({
      where: {
        turma_id: turmaId,
        anoLetivo: anoLetivo,
      },
      select: {
        id: true,
        aluno_id: true,
        anoLetivo: true,
        dataMatricula: true,
        observacao: true,
        responsavel_id: true,
        situacao_id: true,
        tipoContrato_id: true,
        Aluno: true,
        Responsavel: true,
        Conceito: true,
        TipoContrato: true,
        Situacao: true,
        Boletim: {
          select: {
            id: true,
          },
        },
        Turma: {
          select: {
            Serie: true,
            nome: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return matricula;
  }
}
class RelatorioMatriculaService {
  async execute(dataInicio: Date, dataFinal: Date) {
    try {
      const matriculas = await prismaClient.matricula.count({
        where: {
          dataMatricula: {
            gte: dataInicio,
            lte: dataFinal,
          },
        },
      });
      return matriculas;
    } catch (error) {}

  }
}

export {
  ListBoletimMatriculaService,
  ListConceitoMatriculaService,
  CreateMatriculaService,
  ListMatriculaService,
  GetEditMatriculaService,
  EditMatriculaService,
  RelatorioMatriculaService
};
