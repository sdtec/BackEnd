import { Request, Response } from "express";
import { ContratoRequest } from "../models/interfaces/ContratoRequest";
import {
  CreateContratoService,
  EditContratoService,
  GetEditContratoService,
  ListContratoService,
} from "../services/ContratoService";

class EditContratoController {
  async handle(request: Request, response: Response) {
    const { aluno_id, ano, data, id, matricula_id, turma_id }: ContratoRequest =
      request.body as unknown as ContratoRequest;
    const editContratoService = new EditContratoService();

    const contratoEdited = editContratoService.execute({
      aluno_id,
      ano,
      data,
      id,
      matricula_id,
      turma_id,
    });
    return response.json(contratoEdited);
  }
}

class GetEditContratoController {
  async handle(request: Request, response: Response) {
    const contrato_id = request.query.avaliacao_id as string;
    const editContratoService = new GetEditContratoService();
    const contrato = await editContratoService.execute(contrato_id);

    return response.json(contrato);
  }
}

class ListContratoController {
  async handle(request: Request, response: Response) {
    const listContratoService = new ListContratoService();
    const contrato = await listContratoService.execute();

    return response.json(contrato);
  }
}

export {
  EditContratoController,
  GetEditContratoController,
  ListContratoController,
};
