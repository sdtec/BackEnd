import { Request, Response } from "express";
import { EmpresaRequest } from "../models/interfaces/EmpresaRequest";
import {
  CreateEmpresaService,
  EditEmpresaService,
  GetEditEmpresaService,
  ListEmpresaService,
} from "../services/EmpresaService";

class CreateEmpresaController {
  async handle(request: Request, response: Response) {
    const {
      bairro,
      cidade_id,
      complemento,
      declaracao,
      email,
      endereco,
      id,
      logoEmpresa,
      nome,
      nomeDiretor,
      nomeFantasia,
      nomeSecretaria,
      numeroCep,
      numeroCnpj,
      numeroEndereco,
      numeroTelefone,
      resolucao,
    }: EmpresaRequest = request.body;
    const createEmpresaService = new CreateEmpresaService();
    try {
      const empresa = await createEmpresaService.execute({
        bairro,
        cidade_id,
        complemento,
        declaracao,
        email,
        endereco,
        id,
        logoEmpresa,
        nome,
        nomeDiretor,
        nomeFantasia,
        nomeSecretaria,
        numeroCep,
        numeroCnpj,
        numeroEndereco,
        numeroTelefone,
        resolucao,
      });

      return response
        .status(201)
        .json("Sucesso ao adicionar dados de empresa!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados da empresa, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditEmpresaController {
  async handle(request: Request, response: Response) {
    const {
      bairro,
      cidade_id,
      complemento,
      declaracao,
      email,
      endereco,
      id,
      logoEmpresa,
      nome,
      nomeDiretor,
      nomeFantasia,
      nomeSecretaria,
      numeroCep,
      numeroCnpj,
      numeroEndereco,
      numeroTelefone,
      resolucao,
    }: EmpresaRequest = request.body as unknown as EmpresaRequest;
    const editEmpresaService = new EditEmpresaService();
    try {
      const empresaEdited = editEmpresaService.execute({
        bairro,
        cidade_id,
        complemento,
        declaracao,
        email,
        endereco,
        id,
        logoEmpresa,
        nome,
        nomeDiretor,
        nomeFantasia,
        nomeSecretaria,
        numeroCep,
        numeroCnpj,
        numeroEndereco,
        numeroTelefone,
        resolucao,
      });
      return response.status(201).json("Sucesso ao alterar dados de empresa!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados da empresa, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditEmpresaController {
  async handle(request: Request, response: Response) {
    const empresa_id = request.query.empresa_id as string;
    const editEmpresaService = new GetEditEmpresaService();
    try {
      const empresa = await editEmpresaService.execute(empresa_id);

      return response.json(empresa);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados da empresa!"));
    }
  }
}

class ListEmpresaController {
  async handle(request: Request, response: Response) {
    const listEmpresaService = new ListEmpresaService();
    try {
      const empresa = await listEmpresaService.execute();

      return response.json(empresa);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados da empresa!"));
    }
  }
}

export {
  CreateEmpresaController,
  EditEmpresaController,
  GetEditEmpresaController,
  ListEmpresaController,
};
