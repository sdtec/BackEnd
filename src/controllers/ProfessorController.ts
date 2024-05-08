import { Request, Response } from "express";
import { ProfessorRequest } from "../models/interfaces/ProfessorRequest";
import {
  CreateProfessorService,
  EditProfessorService,
  GetEditProfessorService,
  ListProfessorService,
} from "../services/ProfessorService";

class CreateProfessorController {
  async handle(request: Request, response: Response) {
    const {
      ativo,
      email,
      id,
      lancarNotaRetroativa,
      nome,
      senha,
      telefoneCelular,
      telefoneComercial,
    }: ProfessorRequest = request.body;
    const createProfessorService = new CreateProfessorService();
    try {
      const professor = await createProfessorService.execute({
        ativo,
        email,
        id,
        lancarNotaRetroativa,
        nome,
        senha,
        telefoneCelular,
        telefoneComercial,
      });

      return response
        .status(201)
        .json("Sucesso ao adicionar dados de professor(a)!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados do(a) professor(a), verifique se os compos estão preenchidos corretamente! ")
        );
    }
  }
}
class EditProfessorController {
  async handle(request: Request, response: Response) {
    const {
      ativo,
      email,
      id,
      lancarNotaRetroativa,
      nome,
      senha,
      telefoneCelular,
      telefoneComercial,
    }: ProfessorRequest = request.body as unknown as ProfessorRequest;
    const editProfessorService = new EditProfessorService();
    try {
      const professorEdited = editProfessorService.execute({
        ativo,
        email,
        id,
        lancarNotaRetroativa,
        nome,
        senha,
        telefoneCelular,
        telefoneComercial,
      });
      return response
        .status(201)
        .json("Sucesso ao alterar dados de professor(a)!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados do(a) professor(a), verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditProfessorController {
  async handle(request: Request, response: Response) {
    const professor_id = request.query.professor_id as string;
    const editProfessorService = new GetEditProfessorService();
    try {
      const professor = await editProfessorService.execute(professor_id);

      return response.json(professor);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados do(a) professor(a)!"));
    }
  }
}

class ListProfessorController {
  async handle(request: Request, response: Response) {
    const listProfessorService = new ListProfessorService();
    try {
      const professor = await listProfessorService.execute();

      return response.json(professor);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados dos professores!"));
    }
  }
}

export {
  CreateProfessorController,
  EditProfessorController,
  GetEditProfessorController,
  ListProfessorController,
};
