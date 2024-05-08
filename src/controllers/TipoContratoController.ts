import { Request, Response } from "express";
import { TipoContratoRequest } from "../models/interfaces/TipoContratoRequest";
import {
  CreateTipoContratoService,
  EditTipoContratoService,
  GetEditTipoContratoService,
  ListTipoContratoService,
} from "../services/TipoContratoService";

class CreateTipoContratoController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: TipoContratoRequest = request.body;
    const createTipoContratoService = new CreateTipoContratoService();
    try {
      const tipoContrato = await createTipoContratoService.execute({
        ativo,
        id,
        nome,
      });

      return response
        .status(201)
        .json("Sucesso ao adicionar dados de tipo de contrato!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados do tipo de contrato, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditTipoContratoController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: TipoContratoRequest =
      request.body as unknown as TipoContratoRequest;
    const editTipoContratoService = new EditTipoContratoService();
    try {
      const tipoContratoEdited = editTipoContratoService.execute({
        ativo,
        id,
        nome,
      });
      return response
        .status(201)
        .json("Sucesso ao alterar dados de tipo de contrato!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados do tipo de contrato, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditTipoContratoController {
  async handle(request: Request, response: Response) {
    const tipoContrato_id = request.query.tipoContrato_id as string;
    const editTipoContratoService = new GetEditTipoContratoService();
    try {
      const tipoContrato = await editTipoContratoService.execute(
        tipoContrato_id
      );
      return response.json(tipoContrato);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados do tipo de contrato!"));
    }
  }
}

class ListTipoContratoController {
  async handle(request: Request, response: Response) {
    const listTipoContratoService = new ListTipoContratoService();
    try {
      const tipoContrato = await listTipoContratoService.execute();
      return response.json(tipoContrato);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados dos tipos de contratos!"));
    }
  }
}

export {
  CreateTipoContratoController,
  EditTipoContratoController,
  GetEditTipoContratoController,
  ListTipoContratoController,
};
