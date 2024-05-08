import { Decimal } from "@prisma/client/runtime";
import { ContratoParcelaModalidadeRequest } from "../models/interfaces/ContratoParcelaModalidadeRequest";
import prismaClient from "../prisma";

class EditContratoParcelaModalidadeService {
  async execute({
    id,
    contratoModalidade_id,
    dataBaixaPagamento,
    dataPagamento,
    dataVencimento,
    formaPagamento_id,
    juros,
    multa,
    numeroParcela,
    observacao,
    situacao_id,
    total,
    valorCobrado,
    valorDesconto,
    valorPagamento,
  }: ContratoParcelaModalidadeRequest) {
    const contratoParcelaModalidadeExists =
      await prismaClient.contratoParcelaModalidade.findFirst({
        where: {
          id: id,
        },
      });

    if (!contratoParcelaModalidadeExists) {
      throw new Error("Parcela não encontrada!");
    }
    if (
      valorPagamento < total &&
      valorPagamento != null
    ) {
      valorDesconto = 
        total - valorPagamento
      
    } else {
      valorDesconto = 0;
    }
    const contratoParcelaModalidadeEdited =
      await prismaClient.contratoParcelaModalidade.update({
        where: {
          id: id,
        },
        data: {
          contratoModalidade_id: contratoModalidade_id,
          dataBaixaPagamento: new Date().toISOString(),
          dataPagamento: new Date().toISOString(),
          dataVencimento: dataVencimento,
          formaPagamento_id: formaPagamento_id,
          juros: juros,
          multa: multa,
          numeroParcela: numeroParcela,
          observacao: observacao,
          situacao_id: "dc5cbf03-22b5-4552-a083-4074ed429826",
          total: total,
          valorCobrado: valorCobrado,
          valorDesconto: valorDesconto,
          valorPagamento: valorPagamento,
          updated_at: new Date().toISOString(),
        },
      });
    return contratoParcelaModalidadeEdited;
  }
}

class GetEditContratoParcelaModalidadeService {
  async execute(contratoparcelaModalidade_id: string) {
    const contratoParcelaModalidade =
      await prismaClient.contratoParcelaModalidade.findUnique({
        where: {
          id: contratoparcelaModalidade_id,
        },
        select: {
          id: true,
          contratoModalidade_id: true,
          dataBaixaPagamento: true,
          dataPagamento: true,
          dataVencimento: true,
          formaPagamento_id: true,
          juros: true,
          multa: true,
          numeroParcela: true,
          observacao: true,
          situacao_id: true,
          valorCobrado: true,
          valorDesconto: true,
          valorPagamento: true,
          total: true,
        },
      });
    if (!contratoParcelaModalidade) {
      return null;
    }

    const parcela = contratoParcelaModalidade;

    if (
      Number(parcela.juros) == 0 &&
      Number(parcela.multa) == 0 &&
      Number(parcela.total) == 0 &&
      Number(parcela.valorPagamento) == 0
    ) {
      parcela.valorPagamento = null;
      const DataAtual = new Date();
      const DataVencimento = new Date(parcela.dataVencimento);
      const UmDia = 24 * 60 * 60 * 1000;
      const TotalDias = Math.ceil(Number(((DataAtual.getTime() - DataVencimento.getTime()) / UmDia).toFixed(0)));
      if (TotalDias > 0) {
        parcela.juros = Decimal.mul(0.33, TotalDias);
        parcela.multa = Decimal.div(
          Decimal.mul(parcela.valorCobrado, 2),
          100
        );
        parcela.total = Decimal.add(
          Decimal.add(parcela.valorCobrado, parcela.multa),
          parcela.juros
        );
      }
      if (
        parcela.valorPagamento < parcela.total &&
        parcela.valorPagamento != null
      ) {
        parcela.valorDesconto = new Decimal(
          Number(parcela.total) - Number(parcela.valorPagamento)
        );
      } else {
        parcela.valorDesconto = new Decimal(0);
      }
    }

    return {
      ...parcela,
      total: Decimal.add(
        Decimal.add(parcela.valorCobrado, parcela.multa),
        parcela.juros
      ),
    };
  }
  catch(error) {
    console.error("Error fetching Parcela:", error);
    throw new Error("Failed to fetch Parcela");
  }
}

class ListContratoParcelaModalidadeService {
  async execute(contratoModalidade_id: string) {
    const contratoParcelaModalidade =
      await prismaClient.contratoParcelaModalidade.findMany({
        where: {
          contratoModalidade_id: contratoModalidade_id,
        },
        select: {
          id: true,
          contratoModalidade_id: true,
          dataBaixaPagamento: true,
          dataPagamento: true,
          dataVencimento: true,
          formaPagamento_id: true,
          juros: true,
          multa: true,
          numeroParcela: true,
          observacao: true,
          situacao_id: true,
          valorCobrado: true,
          valorDesconto: true,
          valorPagamento: true,
          total: true,
          FormaPagamento: true,
        },
      });
    const parcelas = contratoParcelaModalidade.map((parcela) => {
      if (
        Number(parcela.juros) == 0 &&
        Number(parcela.multa) == 0 &&
        Number(parcela.total) == 0 &&
        Number(parcela.valorPagamento) == 0
      ) {
        parcela.valorPagamento = null;
        const DataAtual = new Date();
        const DataVencimento = new Date(parcela.dataVencimento);

        const UmDia = 24 * 60 * 60 * 1000;

        const TotalDias = Math.ceil(Number(((DataAtual.getTime() - DataVencimento.getTime()) / UmDia).toFixed(0)));

        if (TotalDias > 0) {
          parcela.juros = Decimal.mul(0.33, TotalDias);
          parcela.multa = Decimal.div(
            Decimal.mul(parcela.valorCobrado, 2),
            100
          );
          parcela.total = Decimal.add(
            Decimal.add(parcela.valorCobrado, parcela.multa),
            parcela.juros
          );
        }

        if (
          parcela.valorPagamento < parcela.total &&
          parcela.valorPagamento != null
        ) {
          parcela.valorDesconto = new Decimal(
            Number(parcela.total) - Number(parcela.valorPagamento)
          );
        } else {
          parcela.valorDesconto = new Decimal(0);
        }
      }
      return {
        ...parcela,
        total: Decimal.add(
          Decimal.add(parcela.valorCobrado, parcela.multa),
          parcela.juros
        ),
      };
    });

    return parcelas;
  }
}

export {
  GetEditContratoParcelaModalidadeService,
  EditContratoParcelaModalidadeService,
  ListContratoParcelaModalidadeService,
};
