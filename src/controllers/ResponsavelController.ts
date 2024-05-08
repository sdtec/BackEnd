import { Request, Response } from "express";
import { ResponsavelRequest } from "../models/interfaces/ResponsavelRequest";
import {
  CreateResponsavelService,
  EditResponsavelService,
  GetEditResponsavelService,
  ListResponsavelService,
} from "../services/ResponsavelService";

class CreateResponsavelController {
  async handle(request: Request, response: Response) {
    const {
      ativo,
      id,
      nome,
      bairro,
      celular,
      cep,
      cidade_id,
      cpf,
      dataNascimento,
      email,
      endereco,
      estadoCivil,
      estado_id,
      grauParentesco,
      nacionalidade_id,
      orgaoExpedidorRg,
      profissao,
      rg,
      telefone,
      telefoneTrabalho,
    }: ResponsavelRequest = request.body;
    const createResponsavelService = new CreateResponsavelService();
    try {
      const responsavel = await createResponsavelService.execute({
        ativo,
        id,
        nome,
        bairro,
        celular,
        cep,
        cidade_id,
        cpf,
        dataNascimento,
        email,
        endereco,
        estado_id,
        estadoCivil,
        grauParentesco,
        nacionalidade_id,
        orgaoExpedidorRg,
        profissao,
        rg,
        telefone,
        telefoneTrabalho,
      });

      return response
        .status(201)
        .json("Sucesso ao adicionar dados de responsável!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados do responsável, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}
class EditResponsavelController {
  async handle(request: Request, response: Response) {
    const {
      ativo,
      id,
      nome,
      bairro,
      celular,
      cep,
      cidade_id,
      cpf,
      dataNascimento,
      email,
      endereco,
      estadoCivil,
      estado_id,
      grauParentesco,
      nacionalidade_id,
      orgaoExpedidorRg,
      profissao,
      rg,
      telefone,
      telefoneTrabalho,
    }: ResponsavelRequest = request.body as unknown as ResponsavelRequest;
    const editResponsavelService = new EditResponsavelService();
    try {
      const responsavelEdited = editResponsavelService.execute({
        bairro,
        celular,
        cep,
        cidade_id,
        cpf,
        dataNascimento,
        email,
        endereco,
        estado_id,
        estadoCivil,
        grauParentesco,
        nacionalidade_id,
        orgaoExpedidorRg,
        profissao,
        rg,
        telefone,
        telefoneTrabalho,
        ativo,
        id,
        nome,
      });
      return response
        .status(201)
        .json("Sucesso ao alterar dados de responsável!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados do responsável, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditResponsavelController {
  async handle(request: Request, response: Response) {
    const responsavel_id = request.query.responsavel_id as string;
    const editResponsavelService = new GetEditResponsavelService();
    try {
      const responsavel = await editResponsavelService.execute(responsavel_id);

      return response.json(responsavel);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados do responsável!"));
    }
  }
}

class ListResponsavelController {
  async handle(request: Request, response: Response) {
    const listResponsavelService = new ListResponsavelService();
    try {
      const responsavel = await listResponsavelService.execute();

      return response.json(responsavel);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados dos responsáveis!"));
    }
  }
}

export {
  CreateResponsavelController,
  EditResponsavelController,
  GetEditResponsavelController,
  ListResponsavelController,
};
