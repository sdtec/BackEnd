import { Request, Response } from "express";
import { NivelSerieRequest } from "../models/interfaces/NivelSerieRequest";
import {
  CreateNivelSerieService,
  EditNivelSerieService,
  GetEditNivelSerieService,
  ListNivelSerieService,
} from "../services/NivelSerieService";

class CreateNivelSerieController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome, valorTaxaPapelaria }: NivelSerieRequest =
      request.body;
    const createNivelSerieService = new CreateNivelSerieService();

    try {
      const nivelSerie = await createNivelSerieService.execute({
        ativo,
        id,
        nome,
        valorTaxaPapelaria,
      });

      return response
        .status(201)
        .json("Sucesso ao adicionar dados de nível de série!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de nível de série, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditNivelSerieController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome, valorTaxaPapelaria }: NivelSerieRequest =
      request.body as unknown as NivelSerieRequest;
    const editNivelSerieService = new EditNivelSerieService();
    try {
      const nivelSerieEdited = editNivelSerieService.execute({
        ativo,
        id,
        nome,
        valorTaxaPapelaria,
      });
      return response
        .status(201)
        .json("Sucesso ao alterar dados de nível de série!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados de nível de série, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditNivelSerieController {
  async handle(request: Request, response: Response) {
    const nivelSerie_id = request.query.nivelSerie_id as string;
    const editNivelSerieService = new GetEditNivelSerieService();
    try {
      const nivelSerie = await editNivelSerieService.execute(nivelSerie_id);

      return response.json(nivelSerie);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de nível de série!"));
    }
  }
}

class ListNivelSerieController {
  async handle(request: Request, response: Response) {
    const listNivelSerieService = new ListNivelSerieService();
    try {
      const nivelSerie = await listNivelSerieService.execute();

      return response.json(nivelSerie);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de níveis de séries!"));
    }
  }
}

export {
  CreateNivelSerieController,
  EditNivelSerieController,
  GetEditNivelSerieController,
  ListNivelSerieController,
};
