import { Request, Response } from "express";
import { ContratoParcelaRequest } from "../models/interfaces/ContratoParcelaRequest";

import {
  EditContratoParcelaService,
  GetEditContratoParcelaService,
  ListContratoParcelaService,
} from "../services/ContratoParcelaService";

class EditContratoParcelaController {
  async handle(request: Request, response: Response) {
    const {
      ativo,
      contrato_id,
      dataBaixaPagamento,
      dataPagamento,
      dataVencimento,
      formaPagamento_id,
      id,
      juros,
      multa,
      numeroParcela,
      observacao,
      total,
      usuario_id,
      valorCobrado,
      valorDesconto,
      valorPagamento,
    }: ContratoParcelaRequest =
      request.body as unknown as ContratoParcelaRequest;
    const editContratoParcelaService = new EditContratoParcelaService();

    const contratoParcelaEdited = editContratoParcelaService.execute({
      ativo,
      contrato_id,
      dataBaixaPagamento,
      dataPagamento,
      dataVencimento,
      formaPagamento_id,
      id,
      juros,
      multa,
      numeroParcela,
      observacao,
      total,
      usuario_id,
      valorCobrado,
      valorDesconto,
      valorPagamento,

    });
    return response.json(contratoParcelaEdited);
  }
}

class GetEditContratoParcelaController {
  async handle(request: Request, response: Response) {
    const contratoParcela_id = request.query.contratoParcela_id as string;
    const editContratoParcelaService = new GetEditContratoParcelaService();
    try {
      const contratoParcela = await editContratoParcelaService.execute(
        contratoParcela_id
      );

      return response.json(contratoParcela);
    } catch (error) {}
  }
}

class ListContratoParcelaController {
  async handle(request: Request, response: Response) {
    const contrato_id = request.query.contrato_id as string;
    const listContratoParcelaService = new ListContratoParcelaService();
    try{
    const contratoParcela = await listContratoParcelaService.execute(
      contrato_id
    );

    return response.json(contratoParcela);
  } catch(error) {
    
  }
  }
}

export {
  EditContratoParcelaController,
  GetEditContratoParcelaController,
  ListContratoParcelaController,
};
