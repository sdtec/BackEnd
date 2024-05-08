import { Request, Response } from "express";
import { ContratoParcelaModalidadeRequest } from "../models/interfaces/ContratoParcelaModalidadeRequest";
import {
  EditContratoParcelaModalidadeService,
  GetEditContratoParcelaModalidadeService,
  ListContratoParcelaModalidadeService,
} from "../services/ContratoParcelaModalidade";

class EditContratoParcelaModalidadeController {
  async handle(request: Request, response: Response) {
    const {
      contratoModalidade_id,
      dataBaixaPagamento,
      dataPagamento,
      dataVencimento,
      formaPagamento_id,
      id,
      juros,
      multa,
      numeroParcela,
      observacao,
      situacao_id,
      total,
      valorCobrado,
      valorDesconto,
      valorPagamento,
    }: ContratoParcelaModalidadeRequest =
      request.body as unknown as ContratoParcelaModalidadeRequest;
    const editContratoParcelaModalidadeService =
      new EditContratoParcelaModalidadeService();

    const contratoParcelaModalidadeEdited =
      editContratoParcelaModalidadeService.execute({
        contratoModalidade_id,
        dataBaixaPagamento,
        dataPagamento,
        dataVencimento,
        formaPagamento_id,
        id,
        juros,
        multa,
        numeroParcela,
        observacao,
        situacao_id,
        total,
        valorCobrado,
        valorDesconto,
        valorPagamento,
      });
    return response.json(contratoParcelaModalidadeEdited);
  }
}

class GetEditContratoParcelaModalidadeController {
  async handle(request: Request, response: Response) {
    const contratoParcelaModalidade_id = request.query
      .contratoparcelamodalidade_id as string;
    const editContratoParcelaModalidadeService =
      new GetEditContratoParcelaModalidadeService();
    const contratoParcelaModalidade =
      await editContratoParcelaModalidadeService.execute(
        contratoParcelaModalidade_id
      );

    return response.json(contratoParcelaModalidade);
  }
}

class ListContratoParcelaModalidadeController {
  async handle(request: Request, response: Response) {
    const contratoModalidade_id = request.query.contratomodalidade_id as string;
    const listContratoParcelaModalidadeService =
      new ListContratoParcelaModalidadeService();
    try {
      const contratoParcelaModalidade =
        await listContratoParcelaModalidadeService.execute( 
          contratoModalidade_id
        );

      return response.json(contratoParcelaModalidade);
    } catch (error) {}
  }
}

export { 
  EditContratoParcelaModalidadeController,
  GetEditContratoParcelaModalidadeController,
  ListContratoParcelaModalidadeController,
};
