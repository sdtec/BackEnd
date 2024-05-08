import { Request, Response } from "express";
import { MatriculaModalidadeRequest } from "../models/interfaces/MatriculaModalidadeRequest";
import {
  CreateMatriculaModalidadeService,
  EditMatriculaModalidadeService,
  GetEditMatriculaModalidadeService,
  ListMatriculaModalidadeService,
} from "../services/MatriculaModalidadeService";

class CreateMatriculaModalidadeController {
  async handle(request: Request, response: Response) {
    const {
      aluno_id,
      dataMatricula,
      dataVencimento,
      desconto_id,
      id,
      observacao,
      quantidadeParcela,
      responsavel_id,
      situacao_id,
      turmaModalidade_id,
    }: MatriculaModalidadeRequest = request.body;
    const createMatriculaModalidadeService =
      new CreateMatriculaModalidadeService();
    try {
      const matriculaModalidade =
        await createMatriculaModalidadeService.execute({
          aluno_id,
          dataMatricula,
          dataVencimento,
          desconto_id,
          id,
          observacao,
          quantidadeParcela,
          responsavel_id,
          situacao_id,
          turmaModalidade_id,
        });
     
      return response.json(matriculaModalidade);
    } catch (error) {
      console.log(error)
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados da matrícula da modalidade, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditMatriculaModalidadeController {
  async handle(request: Request, response: Response) {
    const {
      aluno_id,
      dataMatricula,
      dataVencimento,
      desconto_id,
      id,
      observacao,
      quantidadeParcela,
      responsavel_id,
      situacao_id,
      turmaModalidade_id,
    }: MatriculaModalidadeRequest =
      request.body as unknown as MatriculaModalidadeRequest;
    const editMatriculaModalidadeService = new EditMatriculaModalidadeService();
    try {
      const matriculaModalidadeEdited = editMatriculaModalidadeService.execute({
        aluno_id,
        dataMatricula,
        dataVencimento,
        desconto_id,
        id,
        observacao,
        quantidadeParcela,
        responsavel_id,
        situacao_id,
        turmaModalidade_id,
      });
      return response.json(matriculaModalidadeEdited);
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados da matrícula da modalidade, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditMatriculaModalidadeController {
  async handle(request: Request, response: Response) {
    const matriculaModalidade_id = request.query
      .matriculaModalidade_id as string;
    const editMatriculaModalidadeService =
      new GetEditMatriculaModalidadeService();
    try {
      const matriculaModalidade = await editMatriculaModalidadeService.execute(
        matriculaModalidade_id
      );

      return response.json(matriculaModalidade);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro localizar dados da matrícula da modalidade!"));
    }
  }
}

class ListMatriculaModalidadeController {
  async handle(request: Request, response: Response) {
    const listMatriculaModalidadeService = new ListMatriculaModalidadeService();
    try {
      const matriculaModalidade =
        await listMatriculaModalidadeService.execute();

      return response.json(matriculaModalidade);
    } catch (error) {
      return response
        .status(400)
        .json(
          (error = "Erro ao localizar dados das matrículas das modalidades!")
        );
    }
  }
}

export {
  CreateMatriculaModalidadeController,
  EditMatriculaModalidadeController,
  GetEditMatriculaModalidadeController,
  ListMatriculaModalidadeController,
};
