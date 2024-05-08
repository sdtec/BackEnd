import { Request, Response } from "express";
import { ModalidadeRequest } from "../models/interfaces/ModalidadeRequest";
import {
  CreateModalidadeService,
  EditModalidadeService,
  GetEditModalidadeService,
  ListModalidadeService,
} from "../services/ModalidadeService";

class CreateModalidadeController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: ModalidadeRequest = request.body;
    const createModalidadeService = new CreateModalidadeService();
    try {
      const modalidade = await createModalidadeService.execute({
        ativo,
        id,
        nome,
      });

      return response
        .status(201)
        .json("Sucesso ao adicionar dados de modalidade!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de modalidade, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditModalidadeController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: ModalidadeRequest =
      request.body as unknown as ModalidadeRequest;
    const editModalidadeService = new EditModalidadeService();
    try {
      const modalidadeEdited = editModalidadeService.execute({
        ativo,
        id,
        nome,
      });
      return response
        .status(201)
        .json("Sucesso ao alterar dados de modalidade!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados de modalidade, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditModalidadeController {
  async handle(request: Request, response: Response) {
    const modalidade_id = request.query.modalidade_id as string;
    const editModalidadeService = new GetEditModalidadeService();
    try {
      const modalidade = await editModalidadeService.execute(modalidade_id);

      return response.json(modalidade);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de modalidade!"));
    }
  }
}

class ListModalidadeController {
  async handle(request: Request, response: Response) {
    const listModalidadeService = new ListModalidadeService();
    try {
      const modalidade = await listModalidadeService.execute();

      return response.json(modalidade);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de modalidades!"));
    }
  }
}

export {
  CreateModalidadeController,
  EditModalidadeController,
  GetEditModalidadeController,
  ListModalidadeController,
};
