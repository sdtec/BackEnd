import {
  CreateCorRequest,
  EditCorRequest,
} from "../models/interfaces/CorRequest";
import {
  CreateCorService,
  EditCorService,
  getEditCorService,
  ListCorService,
} from "../services/CorService";
import { Request, Response } from "express";

class CreateCorController {
  async handle(request: Request, response: Response) {
    const { nome, ativo }: CreateCorRequest = request.body;
    const createCorService = new CreateCorService();
    try {
      const cor = await createCorService.execute({
        nome,
        ativo,
      });

      return response.status(201).json("Sucesso ao adicionar dados de cor!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de cor, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditCorController {
  async handle(request: Request, response: Response) {
    const { nome, ativo, id }: EditCorRequest =
      request.body as unknown as EditCorRequest;
    const editCorService = new EditCorService();
    try {
   
      const corEdited = editCorService.execute({
        nome,
        ativo,
        id,
      });
      return response.status(201).json("Sucesso ao alterar dados de cor!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados de cor, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class getEditCorController {
  async handle(request: Request, response: Response) {
    const cor_id = request.query.cor_id as string;
    const editCorService = new getEditCorService();
    try {
      const cor = await editCorService.execute(cor_id);

      return response.json(cor);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de cor!"));
    }
  }
}

class ListCorController {
  async handle(request: Request, response: Response) {
    const listCorService = new ListCorService();
    try {
      const cor = await listCorService.execute();

      return response.json(cor);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de cores!"));
    }
  }
}

export {
  CreateCorController,
  EditCorController,
  getEditCorController,
  ListCorController,
};
