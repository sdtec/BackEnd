import { Request, Response } from "express";
import {
  CreateNacionalidadeService,
  EditNacionalidadeService,
  GetEditNacionalidadeService,
  ListNacionalidadeService,
} from "../services/NacionalidadeService";
import { NacionalidadeRequest } from "../models/interfaces/NacionalidadeRequest";

class CreateNacionalidadeController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: NacionalidadeRequest = request.body;
    const createNacionalidadeService = new CreateNacionalidadeService();
    try {
      const nacionalidade = await createNacionalidadeService.execute({
        ativo,
        id,
        nome,
      });

      return response
        .status(201)
        .json("Sucesso ao adicionar dados de nacionalidade!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de nacionalidade, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditNacionalidadeController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: NacionalidadeRequest =
      request.body as unknown as NacionalidadeRequest;
    const editNacionalidadeService = new EditNacionalidadeService();
    try {
      const nacionalidadeEdited = await editNacionalidadeService.execute({
        ativo,
        id,
        nome,
      });
   
      return response
        .status(201)
        .json("Sucesso ao alterar dados de nacionalidade!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados de nacionalidade, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditNacionalidadeController {
  async handle(request: Request, response: Response) {
    const nacionalidade_id = request.query.nacionalidade_id as string;
    const editNacionalidadeService = new GetEditNacionalidadeService();
    try {
      const nacionalidade = await editNacionalidadeService.execute(
        nacionalidade_id
      );

      return response.json(nacionalidade);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de nacionalidade!"));
    }
  }
}

class ListNacionalidadeController {
  async handle(request: Request, response: Response) {
    const listNacionalidadeService = new ListNacionalidadeService();
    try {
      const nacionalidade = await listNacionalidadeService.execute();

      return response.json(nacionalidade);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Error ao localizar dados de nacionalidades!"));
    }
  }
}

export {
  CreateNacionalidadeController,
  EditNacionalidadeController,
  GetEditNacionalidadeController,
  ListNacionalidadeController,
};
