import { FormaPagamentoRequest } from "../models/interfaces/FormaPagamentoRequest";
import prismaClient from "../prisma";

class CreateFormaPagamentoService {
  async execute({ nome, ativo }: FormaPagamentoRequest) {
    const formaPagamento = await prismaClient.formaPagamento.create({
      data: {
        nome,
        ativo,
      },
    });
    return formaPagamento;
  }
}

class EditFormaPagamentoService {
  async execute({ id, nome, ativo }: FormaPagamentoRequest) {
    const formaPagamentoExists = await prismaClient.formaPagamento.findFirst({
      where: {
        id: id,
      },
    });
    if (!formaPagamentoExists) {
      throw new Error("Erro ao localizar a forma de pagamento!");
    }
    const EditFormaPagamento = await prismaClient.formaPagamento.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        ativo: ativo,
        updated_at: new Date().toISOString(),
      },
    });
    return EditFormaPagamento;
  }
}

class GetEditFormaPagamentoService {
  async execute(formaPagamento_id: string) {
    const formaPagamento = await prismaClient.formaPagamento.findUnique({
      where: {
        id: formaPagamento_id,
      },
      select: {
        id: true,
        nome: true,
        ativo: true,
      },
    });
    return formaPagamento;
  }
}

class ListFormaPagamentoService {
  async execute() {
    const formaPagamento = await prismaClient.formaPagamento.findMany({
      where: {
        ativo: true,
      },
      select: {
        id: true,
        nome: true,
        ativo: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return formaPagamento;
  }
}

export {
  CreateFormaPagamentoService,
  EditFormaPagamentoService,
  GetEditFormaPagamentoService,
  ListFormaPagamentoService,
};
