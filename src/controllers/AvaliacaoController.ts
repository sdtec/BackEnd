import { AvaliacaoRequest } from "../models/interfaces/AvaliacaoRequest";
import {
  ListAvaliacaoService,
} from "../services/AvaliacaoService";
import { Request, Response } from "express";

class ListAvaliacaoController {
  async handle(request: Request, response: Response) {
    const listAvaliacaoService = new ListAvaliacaoService();
    const avaliacao = await listAvaliacaoService.execute();

    return response.json(avaliacao);
  }
}

export {
  ListAvaliacaoController,
};
