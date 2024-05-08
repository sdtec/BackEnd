import { Request, Response } from "express";
import { DesenvolvimentoConceitoRequest } from "../models/interfaces/DesenvolvimentoConceitoRequest";
import {
  CreateDesenvolvimentoConceitoService,
  EditDesenvolvimentoConceitoService,
  GetEditDesenvolvimentoConceitoService,
  ListDesenvolvimentoConceitoService,
} from "../services/DesenvolvimentoConceitoService";

class CreateDesenvolvimentoConceitoController {
  async handle(request: Request, response: Response) {
    const {
      nome,
      desenvolvimentoAluno_id,
      id,
    }: DesenvolvimentoConceitoRequest = request.body;
    const createDesenvolvimentoConceitoService =
      new CreateDesenvolvimentoConceitoService();

    const desenvolvimentoConceito =
      await createDesenvolvimentoConceitoService.execute({
        desenvolvimentoAluno_id,
        id,
        nome,
      });

    return response.json(desenvolvimentoConceito);
  }
}
class EditDesenvolvimentoConceitoController {
  async handle(request: Request, response: Response) {
    const {
      nome,
      desenvolvimentoAluno_id,
      id,
    }: DesenvolvimentoConceitoRequest =
      request.body as unknown as DesenvolvimentoConceitoRequest;
    const editDesenvolvimentoConceitoService =
      new EditDesenvolvimentoConceitoService();

    const desenvolvimentoConceitoEdited =
      editDesenvolvimentoConceitoService.execute({
        desenvolvimentoAluno_id,
        id,
        nome,
      });
    return response.json(desenvolvimentoConceitoEdited);
  }
}

class GetEditDesenvolvimentoConceitoController {
  async handle(request: Request, response: Response) {
    const desenvolvimentoConceito_id = request.query.desenvolvimentoConceito_id as string;
    const editDesenvolvimentoConceitoService = new GetEditDesenvolvimentoConceitoService();
    const desenvolvimentoConceito = await editDesenvolvimentoConceitoService.execute(desenvolvimentoConceito_id);

    return response.json(desenvolvimentoConceito);
  }
}

class ListDesenvolvimentoConceitoController {
  async handle(request: Request, response: Response) {
    const desenvolvimentoAluno_id = request.query.desenvolvimentoAluno_id as string;
    const listDesenvolvimentoConceitoService = new ListDesenvolvimentoConceitoService();
    const desenvolvimentoConceito = await listDesenvolvimentoConceitoService.execute(desenvolvimentoAluno_id);

    return response.json(desenvolvimentoConceito);
  }
}

export {
    CreateDesenvolvimentoConceitoController,
    EditDesenvolvimentoConceitoController,
    GetEditDesenvolvimentoConceitoController,
    ListDesenvolvimentoConceitoController
};
