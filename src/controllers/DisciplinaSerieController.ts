import { Request, Response } from "express";
import { DisciplinaSerieRequest } from "../models/interfaces/DisciplinaSerieRequest";
import {
  CreateDisciplinaSerieService,
  EditDisciplinaSerieService,
  GetEditDisciplinaSerieService,
  ListDisciplinaSerieService,
} from "../services/DisciplinaSerieService";

class CreateDisciplinaSerieController {
  async handle(request: Request, response: Response) {
    const { ativo, disciplina_id, id, serie_id }: DisciplinaSerieRequest =
      request.body;
    const createDisciplinaSerieService = new CreateDisciplinaSerieService();
    try {
      const disciplinaSerie = await createDisciplinaSerieService.execute({
        ativo,
        disciplina_id,
        id,
        serie_id,
      });

      return response.status(201).json("Sucesso ao adicionar disciplina!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar disciplina na série, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditDisciplinaSerieController {
  async handle(request: Request, response: Response) {
    const { ativo, disciplina_id, id, serie_id }: DisciplinaSerieRequest =
      request.body as unknown as DisciplinaSerieRequest;
    const editDisciplinaSerieService = new EditDisciplinaSerieService();
    try {
      const disciplinaSerieEdited = editDisciplinaSerieService.execute({
        ativo,
        disciplina_id,
        id,
        serie_id,
      });
      return response.status(201).json("Sucesso ao desativar disciplina!");
    } catch (error) {
      return response
        .status(400)
        .json(
          "Erro ao alterar disciplina na série, verifique se os campos estão preenchidos corretamente!"
        );
    }
  }
}

class GetEditDisciplinaSerieController {
  async handle(request: Request, response: Response) {
    const disciplinaSerie_id = request.query.disciplinaSerie_id as string;
    const editDisciplinaSerieService = new GetEditDisciplinaSerieService();
    try {
      const disciplinaSerie = await editDisciplinaSerieService.execute(
        disciplinaSerie_id
      );

      return response.json(disciplinaSerie);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de disciplina!"));
    }
  }
}

class ListDisciplinaSerieController {
  async handle(request: Request, response: Response) {
    const listDisciplinaSerieService = new ListDisciplinaSerieService();
    const serie_id = request.query.serie_id as string;
    try {
      const disciplinaSerie = await listDisciplinaSerieService.execute(
        serie_id
      );

      return response.json(disciplinaSerie);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar disciplinas da série!"));
    }
  }
}

export {
  CreateDisciplinaSerieController,
  EditDisciplinaSerieController,
  GetEditDisciplinaSerieController,
  ListDisciplinaSerieController,
};
