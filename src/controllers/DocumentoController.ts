import { Request, Response } from "express";
import { DocumentoRequest } from "../models/interfaces/DocumentoRequest";
import {
  CreateDocumentoService,
  EditDocumentoService,
  GetEditDocumentoService,
  ListDocumentoService,
} from "../services/DocumentoService";

class CreateDocumentoController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: DocumentoRequest = request.body;
    const createDocumentoService = new CreateDocumentoService();
    try {
      const documento = await createDocumentoService.execute({
        ativo,
        id,
        nome,
      });

      return response
        .status(201)
        .json("Sucesso ao adicionar dados de documento!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de documento, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditDocumentoController {
  async handle(request: Request, response: Response) {
    const { ativo, id, nome }: DocumentoRequest =
      request.body as unknown as DocumentoRequest;
    const editDocumentoService = new EditDocumentoService();
    try {
      const documentoEdited = editDocumentoService.execute({
        ativo,
        id,
        nome,
      });
      return response
        .status(201)
        .json("Sucesso ao alterar dados de documento!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados de documento, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditDocumentoController {
  async handle(request: Request, response: Response) {
    const documento_id = request.query.documento_id as string;
    const editDocumentoService = new GetEditDocumentoService();
    try {
      const documento = await editDocumentoService.execute(documento_id);

      return response.json(documento);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de documento!"));
    }
  }
}

class ListDocumentoController {
  async handle(request: Request, response: Response) {
    const listDocumentoService = new ListDocumentoService();
    try {
      const documento = await listDocumentoService.execute();

      return response.json(documento);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de documentos!"));
    }
  }
}

export {
  CreateDocumentoController,
  EditDocumentoController,
  GetEditDocumentoController,
  ListDocumentoController,
};
