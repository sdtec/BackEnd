import { Request, Response } from "express";
import { DisciplinaRequest } from "../models/interfaces/DisciplinaRequest";
import {
  CreateDisciplinaService,
  EditDisciplinaService,
  GetEditDisciplinaService,
  ListDisciplinaService,
} from "../services/DisciplinaService";

class CreateDisciplinaController {
  async handle(request: Request, response: Response) {
    const {
      ativo,
      cargaHoraria,
      id,
      nome,
      ordem,
      valorCobrado,
    }: DisciplinaRequest = request.body;
    const createDisciplinaService = new CreateDisciplinaService();
    try {
      const disciplinaService = await createDisciplinaService.execute({
        ativo,
        cargaHoraria,
        id,
        nome,
        ordem,
        valorCobrado,
      });

      return response
        .status(201)
        .json("Sucesso ao adicionar dados de disciplina!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de disciplina, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditDisciplinaController {
  async handle(request: Request, response: Response) {
    const {
      ativo,
      cargaHoraria,
      id,
      nome,
      ordem,
      valorCobrado,
    }: DisciplinaRequest = request.body as unknown as DisciplinaRequest;
    const editDisciplinaService = new EditDisciplinaService();
    try {
      const disciplinaEdited = editDisciplinaService.execute({
        ativo,
        cargaHoraria,
        id,
        nome,
        ordem,
        valorCobrado,
      });
      return response
        .status(201)
        .json("Sucesso ao alterar dados de disciplina!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados de disciplina, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditDisciplinaController {
  async handle(request: Request, response: Response) {
    const disciplina_id = request.query.disciplina_id as string;
    const editDisciplinaService = new GetEditDisciplinaService();
    try {
      const disciplina = await editDisciplinaService.execute(disciplina_id);

      return response.json(disciplina);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de disciplina!"));
    }
  }
}

class ListDisciplinaController {
  async handle(request: Request, response: Response) {
    const listDisciplinaService = new ListDisciplinaService();
    try {
      const disciplina = await listDisciplinaService.execute();

      return response.json(disciplina);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de disciplinas!"));
    }
  }
}

export {
  CreateDisciplinaController,
  EditDisciplinaController,
  GetEditDisciplinaController,
  ListDisciplinaController,
};
