import { Request, Response } from "express";
import { TurmaModalidadeRequest } from "../models/interfaces/TurmaModalidadeRequest";
import {
  CreateTurmaModalidadeService,
  EditTurmaModalidadeService,
  GetEditTurmaModalidadeService,
  ListTurmaModalidadeService,
} from "../services/TurmaModalidadeService";

class CreateTurmaModalidadeController {
  async handle(request: Request, response: Response) {
    const {
      anoCalendario,
      ativo,
      dataVencimentoParcela,
      id,
      modalidade_id,
      nome,
      numeroCapacidade,
      professor_id,
      turno_id,
      valorMensalidade,
    }: TurmaModalidadeRequest = request.body;
    const createTurmaModalidadeService = new CreateTurmaModalidadeService();
    try {
      const turmaModalidade = await createTurmaModalidadeService.execute({
        anoCalendario,
        ativo,
        dataVencimentoParcela,
        id,
        modalidade_id,
        nome,
        numeroCapacidade,
        professor_id,
        turno_id,
        valorMensalidade,
      });

      return response.json(turmaModalidade);
    } catch (error) {}
  }
}
class EditTurmaModalidadeController {
  async handle(request: Request, response: Response) {
    const {
      anoCalendario,
      ativo,
      dataVencimentoParcela,
      id,
      modalidade_id,
      nome,
      numeroCapacidade,
      professor_id,
      turno_id,
      valorMensalidade,
    }: TurmaModalidadeRequest =
      request.body as unknown as TurmaModalidadeRequest;
    const editTurmaModalidadeService = new EditTurmaModalidadeService();

    const turmaModalidadeEdited = editTurmaModalidadeService.execute({
      anoCalendario,
      ativo,
      dataVencimentoParcela,
      id,
      modalidade_id,
      nome,
      numeroCapacidade,
      professor_id,
      turno_id,
      valorMensalidade,
    });
    return response.json(turmaModalidadeEdited);
  }
}

class GetEditTurmaModalidadeController {
  async handle(request: Request, response: Response) {
    const turmaModalidade_id = request.query.turmaModalidade_id as string;
    const editTurmaModalidadeService = new GetEditTurmaModalidadeService();
    const turmaModalidade = await editTurmaModalidadeService.execute(
      turmaModalidade_id
    );

    return response.json(turmaModalidade);
  }
}

class ListTurmaModalidadeController {
  async handle(request: Request, response: Response) {
    const modalidade_id = request.query.modalidade_id as string;
    const listTurmaModalidadeService = new ListTurmaModalidadeService();
    const turmaModalidade = await listTurmaModalidadeService.execute(
      modalidade_id
    );

    return response.json(turmaModalidade);
  }
}

export {
  CreateTurmaModalidadeController,
  EditTurmaModalidadeController,
  GetEditTurmaModalidadeController,
  ListTurmaModalidadeController,
};
