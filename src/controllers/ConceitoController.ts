import { Request, Response } from "express";
import { ConceitoRequest } from "../models/interfaces/ConceitoRequest";
import {
  EditConceitoService,
  GetEditConceitoService,
} from "../services/ConceitoService";

class EditConceitoController {
  async handle(request: Request, response: Response) {
    const {
      aluno_id,
      frequencia1Bimestre,
      frequencia2Bimestre,
      frequencia3Bimestre,
      frequencia4Bimestre,
      id,
      matricula_id,
      observacao,
      turma_id,
    }: ConceitoRequest = request.body as unknown as ConceitoRequest;
    const editConceitoService = new EditConceitoService();

    const conceitoEdited = editConceitoService.execute({
      aluno_id,
      frequencia1Bimestre,
      frequencia2Bimestre,
      frequencia3Bimestre,
      frequencia4Bimestre,
      id,
      matricula_id,
      observacao,
      turma_id,
    });
    return response.json(conceitoEdited);
  }
}

class GetEditConceitoController {
  async handle(request: Request, response: Response) {
    const matriculaId = request.query.matriculaId as string;
    const editConceitoService = new GetEditConceitoService();
    const conceito = await editConceitoService.execute(matriculaId);

    return response.json(conceito);
  }
}

export {
  EditConceitoController,
  GetEditConceitoController,
};
