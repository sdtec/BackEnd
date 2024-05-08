import { ContratoRequest } from "../models/interfaces/ContratoRequest";
import prismaClient from "../prisma";

class CreateContratoService {
  async execute({
    aluno_id,
    ano,
    data,
    id,
    matricula_id,
    turma_id,
  }: ContratoRequest) {
    const contrato = await prismaClient.contrato.create({
      data: {
        ano: ano,
        data: data,
        aluno_id: aluno_id,
        matricula_id: matricula_id,
        turma_id: turma_id,
      },
    });
    return contrato;
  }
}

class EditContratoService {
  async execute({
    aluno_id,
    ano,
    data,
    turma_id,
    matricula_id,
    id,
  }: ContratoRequest) {
    const contratoExists = await prismaClient.contrato.findFirst({
      where: {
        id: id,
      },
    });

    if (!contratoExists) {
      throw new Error("Contrato não encontrado!");
    }

    const contratoEdited = await prismaClient.contrato.update({
      where: {
        id: id,
      },
      data: {
        aluno_id: aluno_id,
        ano: ano,
        data: data,
        matricula_id: matricula_id,
        turma_id: turma_id,
        updated_at: new Date().toISOString(),
      },
    });
    return contratoEdited;
  }
}

class GetEditContratoService {
  async execute(contrato_id: string) {
    const contrato = await prismaClient.contrato.findUnique({
      where: {
        id: contrato_id,
      },
      select: {
        id: true,
        aluno_id: true,
        ano: true,
        data: true,
        matricula_id: true,
        turma_id: true,
        Aluno: true,
        Turma: true,
        
      },
    });
    return contrato;
  }
  catch(error) {
    console.error("Error fetching contrato:", error);
    throw new Error("Failed to fetch contrato");
  }
}

class ListContratoService {
  async execute() {
    const contrato = await prismaClient.contrato.findMany({
      select: {
        id: true,
        aluno_id: true,
        ano: true,
        data: true,
        matricula_id: true,
        turma_id: true,
        Aluno: true,
        Turma: true,
        Matricula: true

      },
    });
    return contrato;
  }
}

export {
  CreateContratoService,
  EditContratoService,
  GetEditContratoService,
  ListContratoService,
};
