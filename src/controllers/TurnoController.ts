import { Request, Response } from "express";
import { TurnoRequest } from "../models/interfaces/TurnoRequest";
import {
  CreateTurnoService,
  EditTurnoService,
  GetEditTurnoService,
  ListTurnoService,
} from "../services/TurnoService";

class CreateTurnoController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: TurnoRequest = request.body;
    const createTurnoService = new CreateTurnoService();
    try {
      const turno = await createTurnoService.execute({
        ativo,
        id,
        nome,
      });

      return response.status(201).json("Sucesso ao adicionar dados de turno!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de turno, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditTurnoController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: TurnoRequest =
      request.body as unknown as TurnoRequest;
    const editTurnoService = new EditTurnoService();
    try {
      const turnoEdited = editTurnoService.execute({
        ativo,
        id,
        nome,
      });
      return response.status(201).json("Sucesso ao alterar dados de turno!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados de turno, verifique se os campos estão preenchidos corretamente")
        );
    }
  }
}

class GetEditTurnoController {
  async handle(request: Request, response: Response) {
    const turno_id = request.query.turno_id as string;
    const editTurnoService = new GetEditTurnoService();
    try {
      const turno = await editTurnoService.execute(turno_id);
      return response.json(turno);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de turno!"));
    }
  }
}

class ListTurnoController {
  async handle(request: Request, response: Response) {
    const listTurnoService = new ListTurnoService();
    try {
      const turno = await listTurnoService.execute();
      return response.json(turno);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de turnos!"));
    }
  }
}

export {
  CreateTurnoController,
  EditTurnoController,
  GetEditTurnoController,
  ListTurnoController,
};
