import { Request, Response } from "express";
import { CobrancaModalidadeRequest } from "../models/interfaces/CobrancaModalidadeRequest";
import {
  CreateCobrancaModalidadeService,
  EditCobrancaModalidadeService,
  GetEditCobrancaModalidadeService,
  ListCobrancaModalidadeService,
} from "../services/CobrancaModalidadeService";

class CreateCobrancaModalidadeController {
  async handle(request: Request, response: Response) {
    const {
      ativo,
      dataVencimento,
      id,
      modalidade_id,
      quantidadeParcela,
      valor,
    }: CobrancaModalidadeRequest = request.body;
    const createCobrancaModalidadeService =
      new CreateCobrancaModalidadeService();
    try {
      const cobrancaModalidade = await createCobrancaModalidadeService.execute({
        ativo,
        dataVencimento,
        id,
        modalidade_id,
        quantidadeParcela,
        valor,
      });

      return response
        .status(201)
        .json("Sucesso ao adicionar dados de opção de cobrança da modalidade!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de opção de cobrança da modalidade, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditCobrancaModalidadeController {
  async handle(request: Request, response: Response) {
    const {
      ativo,
      dataVencimento,
      id,
      modalidade_id,
      quantidadeParcela,
      valor,
    }: CobrancaModalidadeRequest =
      request.body as unknown as CobrancaModalidadeRequest;
    const editCobrancaModalidadeService = new EditCobrancaModalidadeService();
    try {
      const cobrancaModalidadeEdited = editCobrancaModalidadeService.execute({
        ativo,
        dataVencimento,
        id,
        modalidade_id,
        quantidadeParcela,
        valor,
      });
      return response
        .status(201)
        .json("Sucesso ao alterar dados de opção de cobrança da modalidade!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados da opção de cobrança da modalidade, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditCobrancaModalidadeController {
  async handle(request: Request, response: Response) {
    const cobrancaModalidade_id = request.query.cobrancaModalidade_id as string;
    const editCobrancaModalidadeService =
      new GetEditCobrancaModalidadeService();
    try {
      const cobrancaModalidade = await editCobrancaModalidadeService.execute(
        cobrancaModalidade_id
      );
      return response.json(cobrancaModalidade);
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao localizar dados da opção de cobrança da modalidade!")
        );
    }
  }
}

class ListCobrancaModalidadeController {
  async handle(request: Request, response: Response) {
    const listCobrancaModalidadeService = new ListCobrancaModalidadeService();
    try {
      const cobrancaModalidade = await listCobrancaModalidadeService.execute();

      return response.json(cobrancaModalidade);
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao localizar dados das opções de cobranças das modalidades!")
        );
    }
  }
}

export {
  CreateCobrancaModalidadeController,
  EditCobrancaModalidadeController,
  GetEditCobrancaModalidadeController,
  ListCobrancaModalidadeController,
};
