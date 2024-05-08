import { transformDocument } from "@prisma/client/runtime";
import { EmpresaRequest } from "../models/interfaces/EmpresaRequest";
import prismaClient from "../prisma";

class CreateEmpresaService {
  async execute({
    bairro,
    cidade_id,
    complemento,
    declaracao,
    email,
    endereco,
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
  }: EmpresaRequest) {
    const empresa = await prismaClient.empresa.create({
      data: {
        bairro: bairro,
        email: email,
        endereco: endereco,
        nome: nome,
        nomeDiretor: nomeDiretor,
        nomeFantasia: nomeFantasia,
        nomeSecretaria: nomeSecretaria,
        numeroCep: numeroCep,
        numeroCnpj: numeroCnpj,
        numeroEndereco: numeroEndereco,
        numeroTelefone: numeroTelefone,
        cidade_id: cidade_id,
        declaracao: declaracao,
        complemento: complemento,
        logoEmpresa: logoEmpresa,
        resolucao: resolucao,
      },
    });
    return empresa;
  }
}

class EditEmpresaService {
  async execute({
    id,
    bairro,
    cidade_id,
    complemento,
    declaracao,
    email,
    endereco,
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
  }: EmpresaRequest) {
    const empresaExists = await prismaClient.empresa.findFirst({
      where: {
        id: id,
      },
    });

    if (!empresaExists) {
      throw new Error("Empresa não encontrada!");
    }
 
    const empresaEdited = await prismaClient.empresa.update({
      where: {
        id: id,
      },
      data: {
        bairro: bairro,
        complemento: complemento,
        declaracao: "",
        email: email,
        endereco: endereco,
        logoEmpresa: logoEmpresa, 
        Cidade: {
          connect: { id: cidade_id },
        },
        nome: nome,
        nomeDiretor: nomeDiretor,
        nomeFantasia: nomeFantasia,
        nomeSecretaria: nomeSecretaria,
        numeroCep: numeroCep,
        numeroCnpj: numeroCnpj,
        numeroEndereco: numeroEndereco,
        numeroTelefone: numeroTelefone,
        resolucao: resolucao,
        updated_at: new Date().toISOString(),
      },
    });
    return empresaEdited;
  }
}

class GetEditEmpresaService {
  async execute(empresa_id: string) {
    const empresa = await prismaClient.empresa.findUnique({
      where: {
        id: empresa_id,
      },
      select: {
        id: true,
        bairro: true,
        cidade_id: true,
        complemento: true,
        declaracao: true,
        email: true,
        endereco: true,
        logoEmpresa: true,
        nome: true,
        nomeDiretor: true,
        nomeFantasia: true,
        nomeSecretaria: true,
        numeroCep: true,
        numeroCnpj: true,
        numeroEndereco: true,
        numeroTelefone: true,
        resolucao: true,
        Cidade: {
          select: {
            nome: true,
            Estado: true,
          },
        },
      },
    });
    return empresa;
  }
  catch(error) {
    console.error("Error fetching empresa:", error);
    throw new Error("Failed to fetch empresa");
  }
}

class ListEmpresaService {
  async execute() {
    const empresa = await prismaClient.empresa.findMany({
      select: {
        bairro: true,
        cidade_id: true,
        complemento: true,
        declaracao: true,
        email: true,
        endereco: true,
        logoEmpresa: true,
        nome: true,
        nomeDiretor: true,
        nomeFantasia: true,
        nomeSecretaria: true,
        numeroCep: true,
        numeroCnpj: true,
        numeroEndereco: true,
        numeroTelefone: true,
        resolucao: true,
        id: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return empresa;
  }
}

export {
  CreateEmpresaService,
  EditEmpresaService,
  GetEditEmpresaService,
  ListEmpresaService,
};
