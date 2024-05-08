import { Request, Response } from "express";
import { SalaRequest } from "../models/interfaces/SalaRequest";
import {
  CreateSalaService,
  EditSalaService,
  GetEditSalaService,
  ListSalaService,
} from "../services/SalaService";

class CreateSalaController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: SalaRequest = request.body;
    const createSalaService = new CreateSalaService();
    try {
      const sala = await createSalaService.execute({
        ativo,
        id,
        nome,
      });

      return response.status(201).json("Sucesso ao adicionar dados da sala!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados da sala, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditSalaController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: SalaRequest =
      request.body as unknown as SalaRequest;
    const editSalaService = new EditSalaService();

    try {
      const salaEdited = editSalaService.execute({
        ativo,
        id,
        nome,
      });
      return response.status(201).json("Sucesso ao alterar dados da sala!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados da sala, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditSalaController {
  async handle(request: Request, response: Response) {
    const sala_id = request.query.sala_id as string;
    const editSalaService = new GetEditSalaService();
    try {
      const sala = await editSalaService.execute(sala_id);

      return response.json(sala);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados da sala!"));
    }
  }
}

class ListSalaController {
  async handle(request: Request, response: Response) {
    const listSalaService = new ListSalaService();
    try {
      const sala = await listSalaService.execute();

      return response.json(sala);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados das salas!"));
    }
  }
}

export {
  CreateSalaController,
  EditSalaController,
  GetEditSalaController,
  ListSalaController,
};
