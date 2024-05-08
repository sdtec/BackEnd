import { Request, Response } from "express";
import { BoletimRequest } from "../models/interfaces/BoletimRequest";
import {

  EditBoletimService,
  GetEditBoletimService,
  ListBoletimService,
} from "../services/BoletimService";

class EditBoletimController {
  async handle(request: Request, response: Response) {
    const {
      aluno_id,
      ano,
      fechado,
      matricula_id,
      turma_id,
      id,
    }: BoletimRequest = request.body as unknown as BoletimRequest;
    const editBoletimService = new EditBoletimService();

    const boletimEdited = editBoletimService.execute({
      aluno_id,
      ano,
      fechado,
      matricula_id,
      turma_id,
      id,
    });
    return response.json(boletimEdited);
  }
}

class GetEditBoletimController {
  async handle(request: Request, response: Response) {
    const boletim_id = request.query.boletim_id as string;
    const editBoletimService = new GetEditBoletimService();
    const boletim = await editBoletimService.execute(boletim_id);

    return response.json(boletim);
  }
}

class ListBoletimController {
  async handle(request: Request, response: Response) {
    const listBoletimService = new ListBoletimService();
    const boletim = await listBoletimService.execute();

    return response.json(boletim);
  }
}

export {
  EditBoletimController,
  GetEditBoletimController,
  ListBoletimController,
};
