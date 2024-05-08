import { Request, Response } from "express";
import { GeneroRequest } from "../models/interfaces/GeneroRequest";
import {
  CreateGeneroService,
  EditGeneroService,
  GetEditGeneroService,
  ListGeneroService,
} from "../services/GeneroService";

class CreateGeneroController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: GeneroRequest = request.body;
    const createGeneroService = new CreateGeneroService();
    try {
      const genero = await createGeneroService.execute({
        ativo,
        id,
        nome,
      });

      return response.status(201).json("Sucesso ao adicionar dados de gênero!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de gênero, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditGeneroController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: GeneroRequest =
      request.body as unknown as GeneroRequest;
    const editGeneroService = new EditGeneroService();
    try {
      const generoEdited = editGeneroService.execute({
        ativo,
        id,
        nome,
      });
      return response.status(201).json("Sucesso ao alterar dados de gênero!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados de gênero, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditGeneroController {
  async handle(request: Request, response: Response) {
    const genero_id = request.query.genero_id as string;
    const editGeneroService = new GetEditGeneroService();
    try {
      const genero = await editGeneroService.execute(genero_id);

      return response.json(genero);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de gênero!"));
    }
  }
}

class ListGeneroController {
  async handle(request: Request, response: Response) {
    const listGeneroService = new ListGeneroService();
    try {
      const genero = await listGeneroService.execute();

      return response.json(genero);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de gêneros!"));
    }
  }
}

export {
  CreateGeneroController,
  EditGeneroController,
  GetEditGeneroController,
  ListGeneroController,
};
