import { ResponsavelRequest } from "../models/interfaces/ResponsavelRequest";
import prismaClient from "../prisma";

class CreateResponsavelService {
  async execute({
    ativo,
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
    id,
    nacionalidade_id,
    nome,
    orgaoExpedidorRg,
    profissao,
    rg,
    telefone,
    telefoneTrabalho,
  }: ResponsavelRequest) {
    const responsavel = await prismaClient.responsavel.create({
      data: {
        bairro,
        celular,
        cep,
        cpf,
        dataNascimento,
        email,
        endereco,
        estadoCivil,
        grauParentesco,
        nome,
        orgaoExpedidorRg,
        profissao,
        rg,
        telefone,
        telefoneTrabalho,
        ativo,
        cidade_id,
        estado_id,
        nacionalidade_id,
      },
    });
    return responsavel;
  }
}

class EditResponsavelService {
  async execute({
    id,
    nome,
    ativo,
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
  }: ResponsavelRequest) {
    const responsavelExists = await prismaClient.responsavel.findFirst({
      where: {
        id: id,
        ativo: true,
      },
    });
    if (!responsavelExists) {
      throw new Error("Erro ao localizar a responsável!");
    }
    const responsavel = await prismaClient.responsavel.update({
      where: {
        id: id,
      },
      data: {
        bairro: bairro,
        celular: celular,
        cep: cep,
        Cidade: {
          connect: { id: cidade_id },
        },
        cpf: cpf,
        dataNascimento: dataNascimento,
        email: email,
        endereco: endereco,
        Estado: {
          connect: { id: estado_id },
        },
        estadoCivil: estadoCivil,
        grauParentesco: grauParentesco,
        nome: nome,
        ativo: ativo,
        Nacionalidade: {
            connect: {id: nacionalidade_id}
        },
        telefoneTrabalho: telefoneTrabalho,
        telefone: telefone,
        orgaoExpedidorRg: orgaoExpedidorRg,
        profissao: profissao,
        rg: rg,
        updated_at: new Date().toISOString(),
      },
    });
    return responsavel;
  }
}

class GetEditResponsavelService {
  async execute(responsavel_id: string) {
    const responsavel = await prismaClient.responsavel.findUnique({
      where: {
        id: responsavel_id,
      },
    });
    return responsavel;
  }
}

class ListResponsavelService {
  async execute() {
    const responsavel = await prismaClient.responsavel.findMany({
      where: {
        ativo: true,
      },
      select: {
        id: true,
        nome: true,
        telefone: true,
        email: true,
        ativo: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return responsavel;
  }
}

export {
CreateResponsavelService,
EditResponsavelService,
GetEditResponsavelService,
ListResponsavelService
};
