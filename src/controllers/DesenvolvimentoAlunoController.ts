import { Request, Response } from "express";
import { DesenvolvimentoAlunoRequest } from "../models/interfaces/DesenvolvimentoAlunoRequest";
import {
  CreateDesenvolvimentoAlunoService,
  EditDesenvolvimentoAlunoService,
  GetEditDesenvolvimentoAlunoService,
  ListDesenvolvimentoAlunoService,
} from "../services/DesenvolvimentoAlunoService";

class CreateDesenvolvimentoAlunoController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: DesenvolvimentoAlunoRequest = request.body;
    const createDesenvolvimentoAlunoService =
      new CreateDesenvolvimentoAlunoService();
    try {
      const desenvolvimentoAluno =
        await createDesenvolvimentoAlunoService.execute({
          nome,
          ativo,
          id,
        });

      return response
        .status(201)
        .json("Sucesso ao adicionar dados de desenvolvimento!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de desenvolvimento, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditDesenvolvimentoAlunoController {
  async handle(request: Request, response: Response) {
    const { nome, ativo, id }: DesenvolvimentoAlunoRequest =
      request.body as unknown as DesenvolvimentoAlunoRequest;
    const editDesenvolvimentoAlunoService =
      new EditDesenvolvimentoAlunoService();
    try {
      const desenvolvimentoAlunoEdited =
        editDesenvolvimentoAlunoService.execute({
          nome,
          ativo,
          id,
        });
      return response.status(201)
      .json("Sucesso ao alterar dados de desenvolvimento!");
    } catch (error) {
      return response.status(400).json((error = "Erro ao adicionar dados de desenvolvimento, verifique se os campos estão preenchidos corretamente!"));
    }
  }
}

class GetEditDesenvolvimentoAlunoController {
  async handle(request: Request, response: Response) {
    const desenvolvimentoAluno_id = request.query
      .desenvolvimentoAluno_id as string;
    const editDesenvolvimentoAlunoService =
      new GetEditDesenvolvimentoAlunoService();
    const desenvolvimentoAluno = await editDesenvolvimentoAlunoService.execute(
      desenvolvimentoAluno_id
    );

    return response.json(desenvolvimentoAluno);
  }
}

class ListDesenvolvimentoAlunoController {
  async handle(request: Request, response: Response) {
    const listDesenvolvimentoAlunoService =
      new ListDesenvolvimentoAlunoService();
    const desenvolvimentoAluno =
      await listDesenvolvimentoAlunoService.execute();

    return response.json(desenvolvimentoAluno);
  }
}

export {
  CreateDesenvolvimentoAlunoController,
  EditDesenvolvimentoAlunoController,
  GetEditDesenvolvimentoAlunoController,
  ListDesenvolvimentoAlunoController,
};
