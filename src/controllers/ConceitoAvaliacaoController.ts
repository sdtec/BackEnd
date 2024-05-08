import { Request, Response } from "express";
import { ConceitoAvaliacaoRequest } from "../models/interfaces/ConceitoAvaliacaoRequest";
import {
  CreateConceitoAvaliacaoService,
  EditConceitoAvaliacaoService,
  GetEditConceitoAvaliacaoService,
  ListConceitoAvaliacaoService,
} from "../services/ConceitoAvaliacaoService";

class CreateConceitoAvaliacaoController {
  async handle(request: Request, response: Response) {
    const {
      avaliacao1B_id,
      avaliacao2B_id,
      avaliacao3B_id,
      avaliacao4B_id,
      conceito_id,
      desenvolvimentoConceito_id,
      id,
    }: ConceitoAvaliacaoRequest = request.body;
    const createConceitoAvaliacaoService = new CreateConceitoAvaliacaoService();
try {
    const conceitoAvaliacao = await createConceitoAvaliacaoService.execute({
      avaliacao1B_id,
      avaliacao2B_id,
      avaliacao3B_id,
      avaliacao4B_id,
      conceito_id,
      desenvolvimentoConceito_id,
      id,
    });

    return response.json(conceitoAvaliacao);
  }catch(error){
return response.status(400).json(error = "Erro ao adicionar ")
  }
  }
}
class EditConceitoAvaliacaoController {
  async handle(request: Request, response: Response) {
    const conceitoRequest: ConceitoAvaliacaoRequest[] = request.body as ConceitoAvaliacaoRequest[];
    const editConceitoAvaliacaoService = new EditConceitoAvaliacaoService();

    const conceitoAvaliacaoEdited = await Promise.all(
      conceitoRequest.map(conceito => editConceitoAvaliacaoService.execute(conceito))
    )
    return response.json(conceitoAvaliacaoEdited);
  }
}

class GetEditConceitoAvaliacaoController {
  async handle(request: Request, response: Response) {
    const conceitoAvaliacao_id = request.query.conceitoAvaliacao_id as string;
    const editConceitoAvaliacaoService = new GetEditConceitoAvaliacaoService();
    const conceitoAvaliacao = await editConceitoAvaliacaoService.execute(
      conceitoAvaliacao_id
    );

    return response.json(conceitoAvaliacao);
  }
}

class ListConceitoAvaliacaoController {
  async handle(request: Request, response: Response) {
    const listConceitoAvaliacaoService = new ListConceitoAvaliacaoService();
    const conceitoId = request.params.conceitoId as string;
    const conceitoAvaliacao = await listConceitoAvaliacaoService.execute(conceitoId);

    return response.json(conceitoAvaliacao);
  }
}

export {
  CreateConceitoAvaliacaoController,
  EditConceitoAvaliacaoController,
  GetEditConceitoAvaliacaoController,
  ListConceitoAvaliacaoController,
};
