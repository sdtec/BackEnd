import { Request, Response } from "express";
import { TurmaRequest } from "../models/interfaces/TurmaRequest";
import {
  CreateTurmaService,
  EditTurmaService,
  GetEditTurmaService,
  ListTurmaSerieService,
  ListTurmaService,
} from "../services/TurmaService";

class CreateTurmaController {
  async handle(request: Request, response: Response) {
    const {
      anoCalendario,
      ativo,
      horarioFinal,
      horarioInicial,
      id,
      nome,
      numeroCapacidade,
      ordem,
      sala_id,
      serie_id,
      turno_id,
      valorIntegral,
      valorMeioPeriodo,
      valorMensalidade,
      valorSemiIntegral,
    }: TurmaRequest = request.body;
    const createTurmaService = new CreateTurmaService();
    try {
      const turma = await createTurmaService.execute({
        anoCalendario,
        ativo,
        horarioFinal,
        horarioInicial,
        id,
        nome,
        numeroCapacidade,
        ordem,
        sala_id,
        serie_id,
        turno_id,
        valorIntegral,
        valorMeioPeriodo,
        valorMensalidade,
        valorSemiIntegral,
      });

      return response.status(201).json("Sucesso ao adicionar dados de turma!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de turma, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditTurmaController {
  async handle(request: Request, response: Response) {
    const {
      anoCalendario,
      ativo,
      horarioFinal,
      horarioInicial,
      id,
      nome,
      numeroCapacidade,
      ordem,
      sala_id,
      serie_id,
      turno_id,
      valorIntegral,
      valorMeioPeriodo,
      valorMensalidade,
      valorSemiIntegral,
    }: TurmaRequest = request.body as unknown as TurmaRequest;
    const editTurmaService = new EditTurmaService();
    try {
      const turmaEdited = editTurmaService.execute({
        ativo,
        id,
        nome,
        anoCalendario,
        horarioFinal,
        horarioInicial,
        numeroCapacidade,
        ordem,
        sala_id,
        serie_id,
        turno_id,
        valorIntegral,
        valorMeioPeriodo,
        valorMensalidade,
        valorSemiIntegral,
      });
      return response.status(201).json("Sucesso ao alterar dados de turma!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados de turma, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditTurmaController {
  async handle(request: Request, response: Response) {
    const turma_id = request.query.turma_id as string;
    const editTurmaService = new GetEditTurmaService();
    try {
      const turma = await editTurmaService.execute(turma_id);
      return response.json(turma);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de turma!"));
    }
  }
}

class ListTurmaController {
  async handle(request: Request, response: Response) {
    const listTurmaService = new ListTurmaService();
    try {
      const turma = await listTurmaService.execute();

      return response.json(turma);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de turmas!"));
    }
  }
}

class ListTurmaSerieController {
  async handle(request: Request, response: Response) {
    const serieId = request.params.serieId as string;
    const anoLetivo = Number(request.params.anoLetivo);
    const listTurmaSerieService = new ListTurmaSerieService();
    try{
    const turmaSerie = await listTurmaSerieService.execute(serieId, anoLetivo);

    return response.json(turmaSerie);
    } catch(error) { 

    }
  }
}

export {
  CreateTurmaController,
  EditTurmaController,
  GetEditTurmaController,
  ListTurmaController,
  ListTurmaSerieController,
};
