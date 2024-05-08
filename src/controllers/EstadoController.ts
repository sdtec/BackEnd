import { Request, Response } from "express";
import { EstadoRequest } from "../models/interfaces/EstadoRequest";
import {
  CreateEstadoService,
  EditEstadoService,
  GetEditEstadoService,
  ListEstadoService,
} from "../services/EstadoService";

class CreateEstadoController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nacionalidade_id, nome, sigla }: EstadoRequest =
      request.body;
    const createEstadoService = new CreateEstadoService();
    try {
      const estado = await createEstadoService.execute({
        ativo,
        id,
        nacionalidade_id,
        nome,
        sigla,
      });

      return response.status(201).json("Sucesso ao adicionar dados de estado!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de estado, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditEstadoController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nacionalidade_id, nome, sigla }: EstadoRequest =
      request.body as unknown as EstadoRequest;
    const editEstadoService = new EditEstadoService();
    try {
      const estadoEdited = editEstadoService.execute({
        ativo: ativo,
        id: id,
        nacionalidade_id: nacionalidade_id,
        nome: nome,
        sigla: sigla,
      });
      return response.status(201).json("Sucesso ao alterar dados de estado!");
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao alterar dados de estado"));
    }
  }
}

class GetEditEstadoController {
  async handle(request: Request, response: Response) {
    const estado_id = request.query.estado_id as string;
    const editEstadoService = new GetEditEstadoService();
    const estado = await editEstadoService.execute(estado_id);

    return response.json(estado);
  }
}

class ListEstadoController {
  async handle(request: Request, response: Response) {
    const listEstadoService = new ListEstadoService();
    const estado = await listEstadoService.execute();

    return response.json(estado);
  }
}

export {
  CreateEstadoController,
  EditEstadoController,
  GetEditEstadoController,
  ListEstadoController,
};
