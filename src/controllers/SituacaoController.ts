import { Request, Response } from "express";
import { SituacaoRequest } from "../models/interfaces/SituacaoRequest";
import {
  CreateSituacaoService,
  EditSituacaoService,
  GetEditSituacaoService,
  ListSituacaoService,
} from "../services/SituacaoService";

class CreateSituacaoController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: SituacaoRequest = request.body;
    const createSituacaoService = new CreateSituacaoService();

    try {
      const situacao = await createSituacaoService.execute({
        ativo,
        id,
        nome,
      });

      return response
        .status(201)
        .json("Sucesso ao adicionar dados de situação!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados da situação, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditSituacaoController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: SituacaoRequest =
      request.body as unknown as SituacaoRequest;
    const editSituacaoService = new EditSituacaoService();

    try {
      const situacaoEdited = editSituacaoService.execute({
        ativo,
        id,
        nome,
      });
      return response.status(201).json("Sucesso ao alterar dados de situação!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados da situação, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditSituacaoController {
  async handle(request: Request, response: Response) {
    const situacao_id = request.query.situacao_id as string;
    const editSituacaoService = new GetEditSituacaoService();
    try {
      const situacao = await editSituacaoService.execute(situacao_id);

      return response.json(situacao);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados da situação!"));
    }
  }
}

class ListSituacaoController {
  async handle(request: Request, response: Response) {
    const listSituacaoService = new ListSituacaoService();
    try {
      const situacao = await listSituacaoService.execute();

      return response.json(situacao);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados das situações!"));
    }
  }
}

export {
  CreateSituacaoController,
  EditSituacaoController,
  GetEditSituacaoController,
  ListSituacaoController,
};
