import { Request, Response } from "express";
import { CobrancaEscolarRequest } from "../models/interfaces/CobrancaEscolarRequest";
import {
  CreateCobrancaEscolarService,
  EditCobrancaEscolarService,
  GetEditCobrancaEscolarService,
  ListCobrancaEscolarService,
} from "../services/CobrancaEscolarService";

class CreateCobrancaEscolarController {
  async handle(request: Request, response: Response) {
    const {
      ativo,
      dataVencimento,
      id,
      nivelSerie_id,
      quantidadeParcela,
      valorIntegral,
      valorMeioPeriodo,
      valorSemiIntegral,
    }: CobrancaEscolarRequest = request.body;
    const createCobrancaEscolarService = new CreateCobrancaEscolarService();
    try {
      const cobrancaEscolar = await createCobrancaEscolarService.execute({
        ativo,
        dataVencimento,
        id,
        nivelSerie_id,
        quantidadeParcela,
        valorIntegral,
        valorMeioPeriodo,
        valorSemiIntegral,
      });

      return response
        .status(201)
        .json("Sucesso ao adicionar dados de opção de cobrança escolar!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de opção de cobrança escolar, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditCobrancaEscolarController {
  async handle(request: Request, response: Response) {
    const {
      ativo,
      dataVencimento,
      id,
      nivelSerie_id,
      quantidadeParcela,
      valorIntegral,
      valorMeioPeriodo,
      valorSemiIntegral,
    }: CobrancaEscolarRequest =
      request.body as unknown as CobrancaEscolarRequest;
    const editCobrancaEscolarService = new EditCobrancaEscolarService();
    try {
      const cobrancaEscolarEdited = await editCobrancaEscolarService.execute({
        ativo,
        dataVencimento,
        id,
        nivelSerie_id,
        quantidadeParcela,
        valorIntegral,
        valorMeioPeriodo,
        valorSemiIntegral,
      });
      return response
        .status(201)
        .json("Sucesso ao alterar dados de opção de cobrança escolar!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados da opção de cobrança escolar, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditCobrancaEscolarController {
  async handle(request: Request, response: Response) {
    const cobrancaEscolar_id = request.query.cobrancaEscolar_id as string;
    const editCobrancaEscolarService = new GetEditCobrancaEscolarService();
    try {
      const cobrancaEscolar = await editCobrancaEscolarService.execute(
        cobrancaEscolar_id
      );
      return response.json(cobrancaEscolar);
    } catch (error) {
      return response
        .status(400)
        .json(
          (error = "Erro ao localizar dados da opção de cobrança escolar!")
        );
    }
  }
}

class ListCobrancaEscolarController {
  async handle(request: Request, response: Response) {
    const listCobrancaEscolarService = new ListCobrancaEscolarService();
    try {
      const cobrancaEscolar = await listCobrancaEscolarService.execute();
      return response.json(cobrancaEscolar);
    } catch (error) {
      return response
        .status(400)
        .json(
          (error = "Erro ao localizar dados da opção de cobrança escolar!")
        );
    }
  }
}

export {
  CreateCobrancaEscolarController,
  ListCobrancaEscolarController,
  GetEditCobrancaEscolarController,
  EditCobrancaEscolarController,
};
