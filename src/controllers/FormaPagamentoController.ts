import { Request, Response } from "express";
import { FormaPagamentoRequest } from "../models/interfaces/FormaPagamentoRequest";
import {
  CreateFormaPagamentoService,
  EditFormaPagamentoService,
  GetEditFormaPagamentoService,
  ListFormaPagamentoService,
} from "../services/FormaPagamentoService";

class CreateFormaPagamentoController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: FormaPagamentoRequest = request.body;
    const createFormaPagamentoService = new CreateFormaPagamentoService();
    try {
      const formaPagamento = await createFormaPagamentoService.execute({
        ativo,
        id,
        nome,
      });

      return response
        .status(201)
        .json("Sucesso ao adicionar dados da forma de pagamento!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados da forma de pagamendo, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditFormaPagamentoController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: FormaPagamentoRequest =
      request.body as unknown as FormaPagamentoRequest;
    const editFormaPagamentoService = new EditFormaPagamentoService();
    try {
      const formaPagamentoEdited = editFormaPagamentoService.execute({
        ativo,
        id,
        nome,
      });
      return response
        .status(201)
        .json("Sucesso ao alterar dados da forma de pagamento!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados da forma de pagamento, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditFormaPagamentoController {
  async handle(request: Request, response: Response) {
    const formaPagamento_id = request.query.formaPagamento_id as string;
    const editFormaPagamentoService = new GetEditFormaPagamentoService();
    try {
      const formaPagamento = await editFormaPagamentoService.execute(
        formaPagamento_id
      );

      return response.json(formaPagamento);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados da forma de pagamento!"));
    }
  }
}

class ListFormaPagamentoController {
  async handle(request: Request, response: Response) {
    const listFormaPagamentoService = new ListFormaPagamentoService();
    try {
      const formaPagamento = await listFormaPagamentoService.execute();

      return response.json(formaPagamento);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados das formas de pagamentos!"));
    }
  }
}

export {
  CreateFormaPagamentoController,
  EditFormaPagamentoController,
  GetEditFormaPagamentoController,
  ListFormaPagamentoController,
};
