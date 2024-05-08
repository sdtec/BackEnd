import { Decimal } from "@prisma/client/runtime";
import { ContratoParcelaRequest } from "../models/interfaces/ContratoParcelaRequest";
import prismaClient from "../prisma";

class EditContratoParcelaService {
  async execute({
    ativo,
    contrato_id,
    dataBaixaPagamento,
    dataPagamento,
    dataVencimento,
    formaPagamento_id,
    id,
    juros,
    multa,
    numeroParcela,
    observacao,
    total,
    usuario_id,
    valorCobrado,
    valorDesconto,
    valorPagamento,
  }: ContratoParcelaRequest) {
    const contratoParcelaExists = await prismaClient.contratoParcela.findFirst({
      where: {
        id: id,
      },
    });

    if (!contratoParcelaExists) {
      throw new Error("Contrato da Parcela não encontrada!");
    }
    if (valorPagamento < total && valorPagamento != null) {
      valorDesconto = total - valorPagamento;
    } else {
      valorDesconto = 0;
    }
    const contratoParcelaEdited = await prismaClient.contratoParcela.update({
      where: {
        id: id,
      },
      data: {
        ativo: true,
        contrato_id: contrato_id,
        dataBaixaPagamento: new Date().toISOString(),
        dataPagamento: new Date().toISOString(),
        dataVencimento: dataVencimento,
        formaPagamento_id: formaPagamento_id,
        juros: Number(juros),
        multa: Number(multa),
        numeroParcela: numeroParcela,
        observacao: observacao,
        total: Number(total),
        usuario_id: "",
        valorCobrado: Number(valorCobrado),
        valorDesconto: Number(valorDesconto),
        valorPagamento: Number(valorPagamento),
        updated_at: new Date().toISOString(),
      },
    });
    return contratoParcelaEdited;
  }
}

class GetEditContratoParcelaService {
  async execute(contratoParcela_id: string) {
    const contratoParcela = await prismaClient.contratoParcela.findUnique({
      where: {
        id: contratoParcela_id,
      },
      select: {
        id: true,
        contrato_id: true,
        dataBaixaPagamento: true,
        dataPagamento: true,
        dataVencimento: true,
        juros: true,
        multa: true,
        numeroParcela: true,
        formaPagamento_id: true,
        observacao: true,
        total: true,
        usuario_id: true,
        valorCobrado: true,
        valorDesconto: true,
        valorPagamento: true,
      },
    });

    if (!contratoParcela) {
      return null;
    }

    const parcela = contratoParcela;

    if (
      Number(parcela.juros) == 0 &&
      Number(parcela.multa) == 0 &&
      Number(parcela.total) == 0
    ) {
      const DataAtual = new Date();
      const DataVencimento = new Date(parcela.dataVencimento);
      const UmDia = 24 * 60 * 60 * 1000;
      const TotalDias = Math.ceil(Number(((DataAtual.getTime() - DataVencimento.getTime()) / UmDia).toFixed(0)));
      if (TotalDias > 0 ) {
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
}

class ListContratoParcelaService {
  async execute(contrato_id) {
    const contratoParcela = await prismaClient.contratoParcela.findMany({
      where: {
        contrato_id: contrato_id,
      },
      select: {
        id: true,
        contrato_id: true,
        dataBaixaPagamento: true,
        dataPagamento: true,
        dataVencimento: true,
        formaPagamento_id: true,
        juros: true,
        multa: true,
        numeroParcela: true,
        observacao: true,
        total: true,
        usuario_id: true,
        valorCobrado: true,
        valorDesconto: true,
        valorPagamento: true,
        FormaPagamento: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    const parcelas = contratoParcela.map((parcela) => {
      if (
        Number(parcela.juros) == 0 &&
        Number(parcela.multa) == 0 &&
        Number(parcela.total) == 0
      ) {
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
  EditContratoParcelaService,
  GetEditContratoParcelaService,
  ListContratoParcelaService,
};
