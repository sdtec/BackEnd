import { Request, Response } from "express";
import { CidadeRequest } from "../models/interfaces/CidadeRequest";
import {
  CreateCidadeService,
  EditCidadeService,
  GetEditCidadeService,
  ListCidadeService,
} from "../services/CidadeService";

class CreateCidadeController {
  async handle(request: Request, response: Response) {
    const { nome, ativo, id, estado_id }: CidadeRequest = request.body;
    const createCidadeService = new CreateCidadeService();
    try {
      const cidade = await createCidadeService.execute({
        nome,
        ativo,
        id,
        estado_id,
      });

      return response.status(201).json("Sucesso ao adicionar dados de cidade!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de cidade, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditCidadeController {
  async handle(request: Request, response: Response) {
    const { nome, ativo, id, estado_id }: CidadeRequest =
      request.body as unknown as CidadeRequest;
    const editCidadeService = new EditCidadeService();
    try {
      const cidadeEdited = editCidadeService.execute({
        nome,
        ativo,
        id,
        estado_id,
      });
      return response.status(201).json("Sucesso ao alterar dados de cidade!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados de Cidade, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditCidadeController {
  async handle(request: Request, response: Response) {
    const cidade_id = request.query.cidade_id as string;
    const editCidadeService = new GetEditCidadeService();
    try {
      const cidade = await editCidadeService.execute(cidade_id);
      return response.json(cidade);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de cidade!"));
    }
  }
}

class ListCidadeController {
  async handle(request: Request, response: Response) {
    const listCidadeService = new ListCidadeService();
    try {
      const cidade = await listCidadeService.execute();
      return response.json(cidade);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de cidades!"));
    }
  }
}

export {
  CreateCidadeController,
  EditCidadeController,
  GetEditCidadeController,
  ListCidadeController,
};
