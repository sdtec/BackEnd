import { Request, Response } from "express";
import { ContratoModalidadeRequest } from "../models/interfaces/ContratoModalidadeRequest";
import {
  EditContratoModalidadeService,
  GetEditContratoModalidadeService,
  ListContratoModalidadeService,
} from "../services/ContratoModalidadeService";

class EditContratoModalidadeController {
  async handle(request: Request, response: Response) {
    const {
      aluno_id,
      dataVencimento,
      id,
      matricula_Modalidade_id,
      observacao,
      quantidadeParcela,
      turmaModalidade_id,
    }: ContratoModalidadeRequest =
      request.body as unknown as ContratoModalidadeRequest;
    const editContratoModalidadeService = new EditContratoModalidadeService();

    const contratoModalidadeEdited = editContratoModalidadeService.execute({
      aluno_id,
      dataVencimento,
      id,
      matricula_Modalidade_id,
      observacao,
      quantidadeParcela,
      turmaModalidade_id,
    });
    return response.json(contratoModalidadeEdited);
  }
}

class GetEditContratoModalidadeController {
  async handle(request: Request, response: Response) {
    const contratoModalidade_id = request.query.contratoModalidade_id as string;
    const editContratoModalidadeService =
      new GetEditContratoModalidadeService();
    const contratoModalidade = await editContratoModalidadeService.execute(
      contratoModalidade_id
    );

    return response.json(contratoModalidade);
  }
}

class ListContratoModalidadeController {
  async handle(request: Request, response: Response) {
    const listContratoModalidadeService = new ListContratoModalidadeService();
    const contratoModalidade = await listContratoModalidadeService.execute();

    return response.json(contratoModalidade);
  }
}

export {
  GetEditContratoModalidadeController,
  EditContratoModalidadeController,
  ListContratoModalidadeController,
};
