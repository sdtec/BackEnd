import { UsuarioRequest } from "../models/interfaces/user/UsuarioRequest";
import {
  EditUsuarioService,
  ListUsuarioService,
  getEditUsuarioService,
} from "../services/user/UsuarioService";
import { Request, Response } from "express";

class EditUsuarioController {
  async handle(request: Request, response: Response) {
    const { id, nome, email, senha }: UsuarioRequest =
      request.body as unknown as UsuarioRequest;
    const editUsuarioService = new EditUsuarioService();
    try {
      const usuarioEdited = editUsuarioService.execute({
        id,
        nome,
        email,
        senha,
      });
      return response.json(usuarioEdited);
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados do usúario, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditUsuarioController {
  async handle(request: Request, response: Response) {
    const usuarioId = request.query.usuarioId as string;
    const editUsuarioService = new getEditUsuarioService();
    const usuario = await editUsuarioService.execute(usuarioId);

    return response.json(usuario);
  }
}

class ListUsuarioController {
  async handle(request: Request, response: Response) {
    const listUsuarioService = new ListUsuarioService();
    const usuario = await listUsuarioService.execute();
    return response.json(usuario);
  }
}

export {
  ListUsuarioController,
  EditUsuarioController,
  GetEditUsuarioController,
};
