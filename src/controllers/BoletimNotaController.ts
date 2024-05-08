import { Request, Response } from "express";
import { BoletimNotaRequest } from "../models/interfaces/BoletimNotaRequest";
import {
  EditBoletimNotaService,
  GetEditBoletimNotaService,
  ListBoletimNotaService,
} from "../services/BoletimNotaService";


class EditBoletimNotaController {
  async handle(request: Request, response: Response) {
    const notasRequest: BoletimNotaRequest[] = request.body as BoletimNotaRequest[];
    const editBoletimNotaService = new EditBoletimNotaService();

    const boletimNotasEdited = await Promise.all(
      notasRequest.map(nota => editBoletimNotaService.execute(nota))
    );

    return response.json(boletimNotasEdited);
  }
}

class GetEditBoletimNotaController {
  async handle(request: Request, response: Response) {
    const boletimId = request.params.boletimId as string;
    const bimestre = Number(request.params.bimestre);
    const editBoletimNotaService = new GetEditBoletimNotaService();
    const boletimNota = await editBoletimNotaService.execute(boletimId,bimestre);

    return response.json(boletimNota);
  }
}

class ListBoletimNotaController {
  async handle(request: Request, response: Response) {
    const listBoletimNotaService = new ListBoletimNotaService();
    const boletimId = request.params.boletimId as string
    const boletimNota = await listBoletimNotaService.execute(boletimId);

    return response.json(boletimNota);
  }
}

export {
  GetEditBoletimNotaController,
  EditBoletimNotaController,
  ListBoletimNotaController,
};
