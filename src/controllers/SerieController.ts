import { Request, Response } from "express";
import { SerieRequest } from "../models/interfaces/SerieRequest";
import {
  CreateSerieService,
  EditSerieService,
  GetEditSerieService,
  ListSerieService,
} from "../services/SerieService";

class CreateSerieController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nivelSerie_id, nome, ordem }: SerieRequest =
      request.body;
    const createSerieService = new CreateSerieService();
    try {
      const serie = await createSerieService.execute({
        ativo,
        id,
        nivelSerie_id,
        nome,
        ordem,
      });

      return response.status(201).json("Sucesso ao adicionar dados de série!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de série, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditSerieController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome, nivelSerie_id, ordem }: SerieRequest =
      request.body as unknown as SerieRequest;
    const editSerieService = new EditSerieService();
    try {
      const serieEdited = editSerieService.execute({
        ativo,
        id,
        nivelSerie_id,
        nome,
        ordem,
      });
      return response.status(201).json("Sucesso ao alterar dados de série!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados de série, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditSerieController {
  async handle(request: Request, response: Response) {
    const serie_id = request.query.serie_id as string;
    const editSerieService = new GetEditSerieService();
    try {
      const serie = await editSerieService.execute(serie_id);

      return response.json(serie);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados da série!"));
    }
  }
}

class ListSerieController {
  async handle(request: Request, response: Response) {
    const listSerieService = new ListSerieService();
    try {
      const serie = await listSerieService.execute();

      return response.json(serie);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados das séries!"));
    }
  }
}

export {
  CreateSerieController,
  EditSerieController,
  GetEditSerieController,
  ListSerieController,
};
