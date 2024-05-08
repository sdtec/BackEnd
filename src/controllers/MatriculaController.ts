import { Request, Response } from "express";
import { MatriculaRequest } from "../models/interfaces/MatriculaRequest";
import {
  CreateMatriculaService,
  EditMatriculaService,
  GetEditMatriculaService,
  ListBoletimMatriculaService,
  ListConceitoMatriculaService,
  ListMatriculaService,
  RelatorioMatriculaService,
} from "../services/MatriculaService";

class CreateMatriculaController {
  async handle(request: Request, response: Response) {
    const {
      aluno_id,
      anoLetivo,
      dataMatricula,
      id,
      observacao,
      responsavel_id,
      situacao_id,
      tipoContrato_id,
      turma_id,
    }: MatriculaRequest = request.body;
    const createMatriculaService = new CreateMatriculaService();
    try {
      const matricula = await createMatriculaService.execute({
        aluno_id,
        anoLetivo,
        dataMatricula,
        id,
        observacao,
        responsavel_id,
        situacao_id,
        tipoContrato_id,
        turma_id,
      });

      return response.json(matricula);
    } catch (error) {
      return response.status(400).json((error = error.message));
    }
  }
}
class EditMatriculaController {
  async handle(request: Request, response: Response) {
    const {
      aluno_id,
      anoLetivo,
      dataMatricula,
      id,
      observacao,
      responsavel_id,
      situacao_id,
      tipoContrato_id,
      turma_id,
    }: MatriculaRequest = request.body as unknown as MatriculaRequest;
    const editMatriculaService = new EditMatriculaService();
    try {
      const matriculaEdited = editMatriculaService.execute({
        aluno_id,
        anoLetivo,
        dataMatricula,
        id,
        observacao,
        responsavel_id,
        situacao_id,
        tipoContrato_id,
        turma_id,
      });
      return response.json(matriculaEdited);
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados da matrícula, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditMatriculaController {
  async handle(request: Request, response: Response) {
    const matricula_id = request.query.matricula_id as string;
    const editMatriculaService = new GetEditMatriculaService();
    try {
      const matricula = await editMatriculaService.execute(matricula_id);

      return response.json(matricula);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de matrícula!"));
    }
  }
}

class ListMatriculaController {
  async handle(request: Request, response: Response) {
    const listMatriculaService = new ListMatriculaService();
    try {
      const matricula = await listMatriculaService.execute();

      return response.json(matricula);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados das matrículas!"));
    }
  }
}
class ListConceitoMatriculaController {
  async handle(request: Request, response: Response) {
    const anoLetivo = Number(request.params.anoLetivo);
    const turmaId = request.params.turmaId as string;
    const listConceitoMatriculaService = new ListConceitoMatriculaService();
    try {
      const matricula = await listConceitoMatriculaService.execute(
        anoLetivo,
        turmaId
      );

      return response.json(matricula);
    } catch (error) {}
  }
}
class ListBoletimMatriculaController {
  async handle(request: Request, response: Response) {
    const serieId = request.params.serieId as string;
    const anoLetivo = Number(request.params.anoLetivo);
    const turmaId = request.params.turmaId as string;
    const listBoletimMatriculaService = new ListBoletimMatriculaService();
    try {
      const matricula = await listBoletimMatriculaService.execute(
        serieId,
        anoLetivo,
        turmaId
      );
      return response.json(matricula);
    } catch (error) {}
  }
}

// class RelatorioMatriculaControoller {
//   async handle(request: Request, response: Response) {
//     const dataInicio = request.params.dataInicio;
//     const dataFinal = request.params.dataFinal;
//     const relatoriosMatriculasService = new RelatorioMatriculaService();
//     try{
// const relatorios = await relatoriosMatriculasService.execute(dataInicio,dataFinal)
//     } catch(error) {
      
//     }
//   }
// }
export {
  ListConceitoMatriculaController,
  CreateMatriculaController,
  EditMatriculaController,
  GetEditMatriculaController,
  ListMatriculaController,
  ListBoletimMatriculaController,
};
