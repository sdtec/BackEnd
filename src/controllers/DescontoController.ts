import { Request, Response } from "express";
import { DescontoRequest } from "../models/interfaces/DescontoRequest";
import {
  CreateDescontoService,
  EditDescontoService,
  GetEditDescontoService,
  ListDescontoService,
} from "../services/DescontoService";

class CreateDescontoController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome, tipo, valor }: DescontoRequest = request.body;
    const createDescontoService = new CreateDescontoService();
    try {
      const desconto = await createDescontoService.execute({
        tipo,
        ativo,
        id,
        nome,
        valor,
      });

      return response
        .status(201)
        .json("Sucesso ao adicionar dados de desconto!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de desconto, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditDescontoController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome, tipo, valor }: DescontoRequest =
      request.body as unknown as DescontoRequest;
    const editDescontoService = new EditDescontoService();
    try {
      const descontoEdited = editDescontoService.execute({
        id,
        ativo,
        nome,
        tipo,
        valor,
      });
      return response.status(201).json("Sucesso ao alterar dados de desconto!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados de desconto, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditDescontoController {
  async handle(request: Request, response: Response) {
    const desconto_id = request.query.desconto_id as string;
    const editDescontoService = new GetEditDescontoService();
    try {
      const desconto = await editDescontoService.execute(desconto_id);

      return response.json(desconto);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de desconto!"));
    }
  }
}

class ListDescontoController {
  async handle(request: Request, response: Response) {
    const listDescontoService = new ListDescontoService();
    try {
      const desconto = await listDescontoService.execute();

      return response.json(desconto);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de descontos!"));
    }
  }
}

export {
  CreateDescontoController,
  GetEditDescontoController,
  EditDescontoController,
  ListDescontoController,
};
